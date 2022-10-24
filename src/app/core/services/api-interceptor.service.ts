// import {Injectable} from '@angular/core';
// import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
// import {Observable} from 'rxjs';
// import {environment} from '../../../environments/environment';
// import {retry, tap} from 'rxjs/operators';
// import {Router} from '@angular/router';
// import {ToastrService} from 'ngx-toastr';

// @Injectable({
//   providedIn: 'root'
// })
// @Injectable()
// export class ApiInterceptorService implements HttpInterceptor {
//   constructor(
//     private router: Router,
//     private toastrService: ToastrService
//   ) {
//   }

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

//     if (!request.url.includes(environment.assetsCDN)) {
//       request = request.clone({
//         setHeaders: {
//           Authorization: `Bearer ${environment.slToken}`
//         }
//       });
//     }

//     return next.handle(request)
//       .pipe(
//         retry(1),
//         tap(
//           event => {
//             if (event instanceof HttpResponse) {
//               // todo check if response.isOk
//               if (event.body.hasOwnProperty('isOk') && !event.body.isOk) {
//                 this.showErrorToast(event.body.error.code, event.body.error.message);
//               }
//             }
//           },
//           httpErrorResponse => {
//             if (httpErrorResponse instanceof HttpErrorResponse) {
//               if (httpErrorResponse.url !== '/assets/connection-ping.json') {
//                 if (httpErrorResponse.status === 401) {
//                   window.location.assign('/');
//                 }
//                 if (httpErrorResponse.error.code) {
//                   this.showErrorToast(httpErrorResponse.error.code, httpErrorResponse.error.message);
//                 }
//               }
//             } else {
//               this.showErrorToast('noCode', 'Generic Error');
//             }
//           }
//         )
//       );
//   }

//   showErrorToast(code, message) {
//     this.toastrService.error(message, `Error: ${code || ''}`, {
//       timeOut: 5000
//     });
//   }
// }

// import { Injectable } from '@angular/core';
// import {
//   HttpErrorResponse,
//   HttpHandler,
//   HttpInterceptor,
//   HttpRequest,
//   HttpResponse
// } from '@angular/common/http';
// import { Store } from '@ngrx/store';
// import { Observable, throwError } from 'rxjs';
// import { catchError, map } from 'rxjs/operators';
// import { environment as env } from 'src/environments/environment';
// import { Router } from '@angular/router';
// import { handleError } from '../../core/error/error.actions';
// import { CRITICAL_ERROR, E } from 'src/app/components/error-handler/errors';
// import { AuthService } from 'src/app/core/login/auth.service';

// // import { ApiHelperService } from './api-helper.service';

// interface IResponse {
//   resultCode: 0 | 1;
//   errorManagement?: {};
//   data?: {};
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class DOJHttpInterceptor implements HttpInterceptor {
//   constructor(
//     private router: Router,
//     private store: Store,
//     private authSrv: AuthService
//   ) {}

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
//     const hasContentType = req.headers.get('content-type');
//     const hasToken = env.token !== '';
//     const localToken = this.authSrv.getToken();

//     const _headers: {
//       [string: string]: string;
//     } = {};
//     hasContentType && (_headers['content-type'] = 'application/json');
//     hasToken && (_headers['Authorization'] = `Bearer ${localToken}`);

//     req = req.clone({
//       url: req.url.includes('http') ? req.url : `${env.apiUrl}/${req.url}`,
//       setHeaders: _headers
//     });

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
