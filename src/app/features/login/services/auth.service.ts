import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  addUser() {
    return this.http.post(`${env.dashboardApi}/register`, {
      email: 'iso_on_fire@hotmail.com',
      password: 'Test1234@',
    });
  }

  login() {
    return this.http.post(
      `${env.dashboardApi}/auth`,
      {
        email: 'iso_on_fire@hotmail.com',
        password: 'Test1234@',
      },
      { withCredentials: true }
    );
  }
}
