import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { throwError } from 'rxjs';
import ENDPOINTS from 'src/app/shared/constants/endpoints';
import { authError, logout } from '../../store/auth/auth.action';
import { RoutingService } from '../routing/routing.service';
import { ERROR, ERROR_TYPES } from './error-config';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(private store: Store, private routeSRv: RoutingService) {}

  handleErr(err: HttpErrorResponse | ErrorEvent, from: string) {
    if (!(err instanceof HttpErrorResponse)) {
      console.log(`Client side error`, err);
      return throwError(() => new Error(`Client side error`));
    }

    // error shared between auth and general
    switch (err.status) {
      case ERROR.serverDown:
        this.routeSRv.moveToLogin();
        break;
      case ERROR.unauthorized:
        break;
      case ERROR.forbidden:
        break;
    }

    switch (from) {
      case ERROR_TYPES.authApi:
        this.handleAuthErr(err);
        // [ ] TODO check behavior with refresh api
        this.store.dispatch(authError({ err }));
        break;
      case ERROR_TYPES.generalApi:
        this.handleGeneralErr(err);
        break;
    }

    return throwError(() => new Error(`Server side error`));
  }

  handleAuthErr(err: HttpErrorResponse) {
    const { url, status } = err;
    switch (status) {
      case ERROR.badRequest:
        // handle 400 on logout
        url?.includes(ENDPOINTS.logout) && this.routeSRv.moveToLogin();
        break;
      case ERROR.unauthorized:
        this.logout();
        break;
      case ERROR.forbidden:
        this.logout();
        break;
    }
  }

  handleGeneralErr(err: HttpErrorResponse) {
    return;
  }

  logout() {
    this.store.dispatch(logout());
  }
}
