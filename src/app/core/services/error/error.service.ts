import { HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { of, throwError } from 'rxjs';
import { ROUTES } from 'src/app/shared/constants/routes-config';
import { refreshToken, logout } from '../../store/auth/auth.action';
import { ERROR } from './error-config';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor(private router: Router, private store: Store) {}

  handleApiErr(err: HttpErrorResponse | ErrorEvent) {
    if (!(err instanceof HttpErrorResponse)) {
      console.log(`Client side error`, err);
      return throwError(() => new Error(`Client side error`));
    }
    console.log(`Server side error`, err);
    switch (err.status) {
      case ERROR.unauthorized:
        this.logout();
    }
    return throwError(() => new Error(`Server side error`));
  }

  logout() {
    this.store.dispatch(logout());
  }
}
