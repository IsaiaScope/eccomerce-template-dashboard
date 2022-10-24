// import { Injectable } from '@angular/core'
// import { Actions, createEffect, ofType } from '@ngrx/effects'
// import { map, mergeMap, tap } from 'rxjs/operators'
// import { AuthService } from '../../service/auth.service'
// import { AuthModel, SignInModelResponse } from '../../model/auth.model'
// import { environment } from '../../../../environments/environment'
// import { Router } from '@angular/router'
// import * as AuthAction from '../action/auth.actions'
// import { AppState } from '../app.states'
// import { Store } from '@ngrx/store'
// import { IdbService } from '../../service/idb.service'

// @Injectable()
// export class AuthEffects {
//   signInAction$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(AuthAction.signIn),
//       map((next) => next.data),
//       mergeMap((payload: AuthModel) =>
//         this.authService.signIn(payload).pipe(
//           map((response: SignInModelResponse) => {
//             if (response.isOk) {
//               environment.slToken = response.response.slToken
//               environment.instanceId = AuthService.parseJWT(
//                 response.response.slToken,
//               ).allowedInstance
//               return {
//                 type: '[Auth] signIn Success',
//                 payload: response.response,
//               }
//             }
//           }),
//         ),
//       ),
//     ),
//   )

//   signOnSuccess$ = createEffect(
//     () =>
//       this.actions$.pipe(
//         ofType(AuthAction.signInSuccess),
//         tap(() => {
//           this.router.navigate(['/pincode']).then()
//         }),
//       ),
//     { dispatch: false },
//   )

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

//   constructor(
//     private actions$: Actions,
//     private store$: Store<AppState>,
//     private authService: AuthService,
//     private idbService: IdbService,
//     private router: Router,
//   ) {}
// }
