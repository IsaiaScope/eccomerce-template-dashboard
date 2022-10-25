import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { State, Store } from '@ngrx/store';
import { throwError } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/features/login/services/auth.service';
import { ErrorService } from '../../services/error/error.service';
import * as authAction from './auth.action';

@Injectable()
export class AuthEffects {
  signInAction$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authAction.signIn),
      mergeMap((loginFormValue) =>
        this.authSrv.login(loginFormValue).pipe(
          tap(console.log),
          map((accessToken) => authAction.signInSuccess(accessToken))
        )
      )
    )
  );

  signOnSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authAction.signInSuccess),
        tap(() => {
          this.router.navigate(['/home']).then();
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
    () =>
      this.actions$.pipe(
        ofType(authAction.refreshTokenSuccess),
        tap(() => console.log(`token Refreshed`))
      ),
    { dispatch: false }
  );

  //   resetPincode = createEffect(() =>
  //     this.actions$.pipe(
  //       ofType(AuthAction.resetPincodeLocalStorage),
  //       tap(() => {
  //         localStorage.removeItem(environment.pincodeName)
  //       }),
  //       map(() => {
  //         this.router.navigate(['/pincode'])
  //         return AuthAction.resetPincodeState()
  //       }),
  //     ),
  //   )

  //   resetPincodeState = createEffect(() =>
  //     this.actions$.pipe(
  //       ofType(AuthAction.resetPincodeState),
  //       tap(() => {
  //         this.router.navigate(['/pincode'])
  //       }),
  //       map(() => AuthAction.navigateToPincode()),
  //     ),
  //   )

  //   resetUser = createEffect(
  //     () =>
  //       this.actions$.pipe(
  //         ofType(AuthAction.resetUser),
  //         map(() => this.idbService.deleteDB('shaka_offline_db')),
  //         map(() => this.idbService.deleteDB('dds-db')),
  //         map(() => localStorage.removeItem(environment.pincodeName)),
  //         tap(() => {
  //           window.location.assign('/')
  //         }),
  //       ),
  //     { dispatch: false },
  //   )

  constructor(
    private actions$: Actions,
    private router: Router,
    private errSrv: ErrorService,
    private authSrv: AuthService // private authService: AuthService, // private idbService: IdbService,
  ) {}
}
