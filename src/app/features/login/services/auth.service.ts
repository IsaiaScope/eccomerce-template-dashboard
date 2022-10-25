import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { catchError, map, share, tap, throwError } from 'rxjs';
import { refreshToken } from 'src/app/core/store/auth/auth.action';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private store: Store) {}

  static parseJwt(token: string) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    return JSON.parse(jsonPayload);
  }

  isTokenExpired = (exp: number) => exp && Date.now() >= exp * 1000;

  addUser() {
    return this.http.post(`${env.dashboardApi}/register`, {
      email: 'iso_on_fire@hotmail.com',
      password: 'Test1234@',
    });
  }

  login(loginFormValue: { email: string; password: string }) {
    return this.http.post(
      `${env.dashboardApi}/login`,
      {
        email: 'iso_on_fire@hotmail.com',
        password: 'Test1234@',
      },
      { withCredentials: true }
    );
  }

  refresh() {
    return this.http
      .get(`${env.dashboardApi}/refresh`, {
        withCredentials: true,
      })
      .pipe(share());
  }
}
