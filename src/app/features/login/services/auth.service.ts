import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ROUTES } from 'src/app/core/services/routing/routes-config';
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
    return this.http.post(`${env.baseUrl}/register`, {
      email: 'iso_on_fire@hotmail.com',
      password: 'Test1234@',
    });
  }

  login(loginFormValue: {
    email: string;
    password: string;
  }): Observable<{ accessToken: string }> {
    return this.http.post<{ accessToken: string }>(
      `${env.baseUrl}/${ENDPOINTS.login}`,
      loginFormValue,
      { withCredentials: true }
    );
  }

  refresh(): Observable<{ accessToken: string }> {
    return this.http.get<{ accessToken: string }>(
      `${env.baseUrl}/${ENDPOINTS.refresh}`,
      {
        withCredentials: true,
      }
    );
  }

  logout() {
    return this.http.get(`${env.baseUrl}/${ENDPOINTS.logout}`, {
      withCredentials: true,
    });
  }
}
