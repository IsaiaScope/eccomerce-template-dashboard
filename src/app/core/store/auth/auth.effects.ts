import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/features/login/services/auth.service';
import { ROUTES } from 'src/app/shared/constants/routes-config';
import * as authAction from './auth.action';

@Injectable()
export class AuthEffects {
  loginAction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authAction.login),
      mergeMap((loginFormValue) =>
        this.authSrv.login(loginFormValue).pipe(
          tap(console.log),
          map((accessToken) => authAction.loginSuccess(accessToken))
        )
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authAction.loginSuccess),
        tap(() => {
          this.router.navigate([ROUTES.routePath.home]).then();
        })
      ),
    { dispatch: false }
  );

  refreshToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authAction.refreshToken),
      mergeMap(() =>
        this.authSrv.refresh().pipe(
          tap(console.log),
          map((accessToken) => authAction.refreshTokenSuccess(accessToken))
        )
      )
    )
  );

  refreshTokenSuccess$ = createEffect(
    () => this.actions$.pipe(ofType(authAction.refreshTokenSuccess)),
    { dispatch: false }
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authAction.logout),
      mergeMap(() =>
        this.authSrv.logout().pipe(map(() => authAction.logoutSuccess()))
      )
    )
  );

  logoutSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authAction.logoutSuccess),
        tap(() => {
          this.router.navigate([ROUTES.routePath.login]).then();
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private authSrv: AuthService
  ) {}
}
