import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {
  catchError,
  exhaustMap,
  filter,
  map,
  switchMap,
  take,
  tap,
} from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { selectAuthState } from '../store';
import { ErrorService } from './error/error.service';
import { refreshToken } from '../store/auth/auth.action';
import { ERROR } from './error/error-config';

@Injectable({
  providedIn: 'root',
})
@Injectable()
export class ApiInterceptorService implements HttpInterceptor {
  token$ = this.store.select(selectAuthState).pipe(
    map(({ accessToken }) => accessToken),
    filter((accessToken) => accessToken !== null)
  );

  isRefreshing$ = this.store.select(selectAuthState).pipe(
    map(({ isRefreshing }) => isRefreshing),
    take(1)
  );

  constructor(private store: Store, private errSrv: ErrorService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (
      req.url.indexOf('login') > -1 ||
      req.url.indexOf('refresh') > -1 ||
      req.url.indexOf('svgs/icons') > -1 ||
      req.url.indexOf('logout') > -1
    ) {
      return next.handle(req).pipe(
        catchError((err: HttpErrorResponse | ErrorEvent) => {
          return this.handleErr(err);
        })
      );
    }

    return this.token$.pipe(
      map((accessToken) => this.addHeaders(req, accessToken)),
      take(1),
      exhaustMap((req) => {
        console.log(`vecchio stream`);
        return next.handle(req);
      }),
      catchError((err: HttpErrorResponse | ErrorEvent) => {
        if (err instanceof HttpErrorResponse && err.status === ERROR.forbidden)
          return this.isRefreshing$.pipe(
            tap((isRefreshing) => {
              !isRefreshing && this.store.dispatch(refreshToken());
            }),
            switchMap(() => {
              return this.token$.pipe(
                switchMap((accessToken) => {
                  console.log(`last call`);
                  return next.handle(this.addHeaders(req, accessToken));
                })
              );
            })
          );
        return this.handleErr(err);
      })
    );
  }

  addHeaders(req: HttpRequest<any>, accessToken: string | null) {
    const _headers: {
      [string: string]: string;
    } = {};
    accessToken && (_headers['Authorization'] = `Bearer ${accessToken}`);
    return req.clone({
      setHeaders: _headers,
      withCredentials: true,
    });
  }

  handleErr(err: HttpErrorResponse | ErrorEvent) {
    return this.errSrv.handleApiErr(err);
  }
}
