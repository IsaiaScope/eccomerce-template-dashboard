import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from './routes-config';

@Injectable({
  providedIn: 'root',
})
export class RoutingService {
  constructor(private router: Router) {}

  moveToLogin() {
    console.log(`navigate to ${ROUTES.path.login}`);
    this.router.navigate([ROUTES.path.login]).then();
  }
  moveToHome() {
    this.router.navigate([ROUTES.path.home]).then();
  }
}
