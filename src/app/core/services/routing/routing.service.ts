import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from './routes-config';

@Injectable({
  providedIn: 'root',
})
export class RoutingService {
  constructor(private router: Router) {}

  moveToLogin() {
    this.router.navigate([ROUTES.routePath.login]).then();
  }
  moveToHome() {
    this.router.navigate([ROUTES.routePath.home]).then();
  }
}
