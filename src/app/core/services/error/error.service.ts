import { HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { refreshToken } from '../../store/auth/auth.action';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  errMap = {
    401: () => this.handle401(),
    403: () => this.handle403(),
  };

  authErrs = {
    401: () => this.routeToLogin(),
    403: () => this.routeToLogin(),
  };

  constructor(private router: Router, private store: Store) {}

  handle401() {
    this.routeToLogin();
  }

  handle403() {
    // this.store.dispatch(refreshToken());
  }

  handleAuthError(code: number) {
    console.log(`CODEEEEEEEEEEEEEEE: ${code}`);
    if (Object.keys(this.errMap).includes(code.toString())) {
      this.authErrs[code as 401 | 403]();
    }
    // err.status === 400 && dispatch store error value
  }

  routeToLogin() {
    console.log(`navigate to login`);
    this.router.navigate(['../', 'login']).then();
  }
}
