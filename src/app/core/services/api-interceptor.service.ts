import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { combineLatest, Observable, of, throwError } from 'rxjs';
import {
  catchError,
  concatMap,
  delay,
  filter,
  map,
  mergeMap,
  retry,
  retryWhen,
  switchMap,
  take,
  tap,
} from 'rxjs/operators';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectAuthState } from '../store';
import { AuthService } from 'src/app/features/login/services/auth.service';
import { State } from '../store/auth/auth.reducer';
import { refreshToken } from '../store/auth/auth.action';
import { ErrorService } from './error/error.service';
import { ofType } from '@ngrx/effects';
import { ERROR } from './error/config-errors';
import { NgIfContext } from '@angular/common';
// import {environment as env} from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
@Injectable()
export class ApiInterceptorService implements HttpInterceptor {
  authData: State;

  constructor(
    private store: Store,
    private authSrv: AuthService,
    private errSrv: ErrorService,
    private router: Router
  ) {
    combineLatest([this.store.select(selectAuthState)]).subscribe((s) => {
      const [authState] = s;
      this.authData = authState;
    });
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { accessToken } = this.authData;

    if (req.url.indexOf('login') > -1 || req.url.indexOf('refresh') > -1) {
      return next.handle(req).pipe(
        catchError((err: HttpErrorResponse) => {
          return this.handleAuthErr(err);
        })
      );
    }

    req = this.addHeaders(req, accessToken);

    return next.handle(req).pipe(
      filter((e) => e.type !== 0),
      map((event) => {
        if (event instanceof HttpResponse) {
          // return event.clone({ body: data });
        }
        console.log(`event`, event);
        return event;
      }),
      catchError((err: HttpErrorResponse | ErrorEvent) => {
        console.dir(err);
        return this.handleErr(req, next, err);
      })
    );
  }

  handleErr(
    req: HttpRequest<any>,
    next: HttpHandler,
    err: HttpErrorResponse | ErrorEvent
  ) {
    if (err.error instanceof ErrorEvent) {
      console.log(`client side error, Error: ${err.error.message}`);
    }
    if (err instanceof HttpErrorResponse) {
      console.log(`server side error Code: ${err.status}, Msg: ${err.message}`);

      return this.refreshHandler(req, next);
    }
    return throwError(() => new Error(`Handle Error`));
  }

  refreshHandler(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return this.authSrv.refresh().pipe(
      map((accessToken: any) => {
        console.log(accessToken);
        this.store.dispatch(refreshToken(accessToken));
        return accessToken;
      }),
      switchMap(({ accessToken }: any) =>
        next.handle(this.addHeaders(req, accessToken))
      ),
      catchError((err: HttpErrorResponse | ErrorEvent) => {
        console.dir(err);
        return this.handleErr(req, next, err);
      })
    );
  }

  addHeaders(req: HttpRequest<any>, accessToken: string) {
    const _headers: {
      [string: string]: string;
    } = {};
    const hasContentType = req.headers.get('content-type');
    hasContentType && (_headers['content-type'] = 'application/json');
    accessToken && (_headers['Authorization'] = `Bearer ${accessToken}`);

    return req.clone({
      // url: req.url.includes('http') ? req.url : `${env.apiUrl}/${req.url}`,
      setHeaders: _headers,
      withCredentials: true,
    });
  }

  handleAuthErr(err: HttpErrorResponse | ErrorEvent) {
    if (err.error instanceof ErrorEvent) {
      console.log(`client side error, Error: ${err.error.message}`);
    }
    if (err instanceof HttpErrorResponse) {
      console.log(`server side error Code: ${err.status}, Msg: ${err.message}`);
      this.errSrv.handleAuthError(err.status);
    }
    return throwError(() => new Error(`Auth Error`));
  }
}

//   return next.handle(request)
//     .pipe(
//       tap(
//         event => {
//           if (event instanceof HttpResponse) {
//             // todo check if response.isOk
//             if (event.body.hasOwnProperty('isOk') && !event.body.isOk) {
//               this.showErrorToast(event.body.error.code, event.body.error.message);
//             }
//           }
//         },
//         httpErrorResponse => {
//           if (httpErrorResponse instanceof HttpErrorResponse) {
//             if (httpErrorResponse.url !== '/assets/connection-ping.json') {
//               if (httpErrorResponse.status === 401) {
//                 window.location.assign('/');
//               }
//               if (httpErrorResponse.error.code) {
//                 this.showErrorToast(httpErrorResponse.error.code, httpErrorResponse.error.message);
//               }
//             }
//           } else {
//             this.showErrorToast('noCode', 'Generic Error');
//           }
//         }
//       )
//     );
// }

//     return next.handle(req).pipe(
//       map((event: any) => {
//         if (event instanceof HttpResponse) {
//           const { body } = event;
//           const { resultCode, errorManagement, data } = body;
//           if (resultCode === 0) {
//             const { errorDescription, errorCode } = errorManagement;
//             const error = new Error(errorDescription) as any;
//             error.code = errorCode;
//             throw error;
//           }
//           return event.clone({ body: data });
//         }
//         return event;
//       }),
//       catchError((error: HttpErrorResponse | Error) => {
//         const err = error instanceof HttpErrorResponse ? error.error : error;
//         const isCritical = this.isCritical(err.code);
//         this.store.dispatch(
//           handleError({
//             code: err.code || 'GE001',
//             isCritical,
//             message: err.message
//           })
//         );
//         this.router.navigate(['/error']);
//         return throwError(() => new Error(err.message));
//       })
//     );
//   }

//   isCritical(code: string): boolean {
//     return CRITICAL_ERROR.includes(code);
//   }
// }

// const localStorageTokens = localStorage.getItem('tokens');
// var token: TokenModel;
// if (localStorageTokens) {
//   token = JSON.parse(localStorageTokens) as TokenModel;
//   var isTokenExpired = this.jwtHelper.isTokenExpired(token?.access_token);
//   if (!isTokenExpired) {
//     return next.handle(req);
//   } else {
//     return this.authService.refreshToken(token).pipe(
//       switchMap((newTokens: TokenModel) => {
//         localStorage.setItem('tokens', JSON.stringify(newTokens));
//         var userInfo = this.jwtHelper.decodeToken(
//           newTokens.access_token
//         ) as UserProfile;
//         this.authService.userProfile.next(userInfo);
//         const transformedReq = req.clone({
//           headers: req.headers.set(
//             'Authorization',
//             `bearer ${newTokens.access_token}`
//           ),
//         });
//         return next.handle(transformedReq);
//       })
//     );
//   }
// }
// this.router.navigate(['/']);
// return throwError(() => 'Invalid call');
// }
