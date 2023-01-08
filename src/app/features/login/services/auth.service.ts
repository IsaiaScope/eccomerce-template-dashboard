import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import ENDPOINTS from 'src/app/shared/constants/endpoints';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

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
  // TODO remove
  addUser() {
    return this.http.post(`${env.baseUrl}/${ENDPOINTS.auth.registerPath()}`, {
      email: 'iso_on_fire@hotmail.com',
      password: 'Test1234@',
      role: 'admin',
    });
  }

  login(loginFormValue: {
    email: string;
    password: string;
  }): Observable<{ accessToken: string }> {
    return this.http.post<{ accessToken: string }>(
      `${env.baseUrl}/${ENDPOINTS.auth.loginPath()}`,
      loginFormValue,
      { withCredentials: true }
    );
  }

  refresh(): Observable<{ accessToken: string }> {
    return this.http.get<{ accessToken: string }>(
      `${env.baseUrl}/${ENDPOINTS.auth.refreshPath()}`,
      {
        withCredentials: true,
      }
    );
  }

  logout(id: string) {
    return this.http.post(
      `${env.baseUrl}/${ENDPOINTS.auth.logoutPath()}`,
      { id },
      {
        withCredentials: true,
      }
    );
  }
}
