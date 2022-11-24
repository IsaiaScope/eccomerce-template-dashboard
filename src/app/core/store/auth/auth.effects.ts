import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  distinctUntilKeyChanged,
  exhaustMap,
  filter,
  map,
  tap,
} from 'rxjs/operators';
import { AuthService } from 'src/app/features/login/services/auth.service';
import { RoutingService } from '../../services/routing/routing.service';
import { LocalStorageService as LS } from '../../services/local-storage/local-storage.service';
import * as authAction from './auth.action';
import { LS_VALUES } from '../../services/local-storage/local-storage-config';
import { Store } from '@ngrx/store';
import { selectAuthState } from '..';

@Injectable()
export class AuthEffects {
  loginAction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authAction.login),
      exhaustMap((loginFormValue) =>
        this.authSrv.login(loginFormValue).pipe(
          map((accessToken) => authAction.loginSuccess(accessToken)),
          tap(() => LS.set(LS_VALUES.persistent, loginFormValue.persistent))
        )
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authAction.loginSuccess),
        tap(() => {
          this.routeSRv.moveToHome();
        })
      ),
    { dispatch: false }
  );

  refreshToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authAction.refreshToken),
      exhaustMap(() =>
        this.authSrv
          .refresh()
          .pipe(
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
      exhaustMap(() => this.store.select(selectAuthState)),
      distinctUntilKeyChanged('isLoggingOut'),
      filter(({ isLoggingOut }) => isLoggingOut === true),
      map((state) => state.userInfo?.userId ?? ''),
      exhaustMap((id) =>
        this.authSrv.logout(id).pipe(map(() => authAction.logoutSuccess()))
      )
    )
  );

  logoutSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authAction.logoutSuccess),
        tap(() => {
          this.routeSRv.moveToLogin();
          LS.remove(LS_VALUES.persistent);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authSrv: AuthService,
    private routeSRv: RoutingService,
    private store: Store
  ) {}
}
