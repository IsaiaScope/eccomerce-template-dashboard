import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { throwError } from 'rxjs';
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

    switch (err.status) {
      case ERROR.serverDown:
        this.routeSRv.moveToLogin();
        break;
      case ERROR.unauthorized:
        this.logout();
        break;
      case ERROR.forbidden:
        this.logout();
        break;
    }

    switch (from) {
      case ERROR_TYPES.authApi:
        this.store.dispatch(authError({ err }));
        break;
    }
    return throwError(() => new Error(`Server side error`));
  }

  logout() {
    this.store.dispatch(logout());
  }
}
