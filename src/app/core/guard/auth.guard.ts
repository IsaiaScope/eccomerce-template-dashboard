// import { Injectable } from '@angular/core'
// import {
//   ActivatedRouteSnapshot,
//   CanActivate,
//   Router,
//   RouterStateSnapshot,
// } from '@angular/router'
// import { AuthService } from '../service/auth.service'
// import { PincodeService } from '../service/pincode.service'
// import { combineLatest } from 'rxjs'
// import { ConnectionService } from '../service/connection.service'

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthGuard implements CanActivate {
//   isAuthenticated

//   constructor(
//     private router: Router,
//     private authService: AuthService,
//     private connectionService: ConnectionService,
//     private pincodeService: PincodeService,
//   ) {
//     combineLatest(
//       connectionService.isOnline(),
//       authService.authState(),
//     ).subscribe((s) => {
//       const connectionState = s[0]
//       const authState = s[1]
//       const isOnline = connectionState.isOnline
//       const isAuth = authState.isAuth
//       const hasPincode = !!authState.pincode
//       const cognitoUsername = authState.cognitoState
//         ? authState.cognitoState.user.username
//         : null
//       const pincodeUsername = this.pincodeService.getUsername(authState.pincode)

//       if (isOnline) {
//         this.isAuthenticated =
//           isAuth && hasPincode && pincodeUsername === cognitoUsername
//       } else {
//         this.isAuthenticated = isAuth && hasPincode
//       }
//       // this.isAuthenticated = s.isAuth && !!s.pincode;
//     })
//   }

//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot,
//   ): boolean {
//     return this.checkAuthentication()
//   }

//   checkAuthentication() {
//     if (this.isAuthenticated) {
//       return true
//     } else {
//       this.router.navigate(['/login'])
//     }
//   }
// }
