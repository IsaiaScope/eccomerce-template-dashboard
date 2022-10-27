import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from './services/auth.service';
import {
  configLoginForm,
  LoginForm,
  structureLoginForm,
} from './utility/login-config';
import { Store } from '@ngrx/store';
import { login } from 'src/app/core/store/auth/auth.action';
import { selectAuthState } from 'src/app/core/store';
import { map } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  structureLoginForm = structureLoginForm;
  loginForm = this.fb.group({
    data: this.fb.group(configLoginForm),
  });
  isLoggingIn$ = this.store
    .select(selectAuthState)
    .pipe(map(({ isLoggingIn }) => isLoggingIn));
  constructor(
    private fb: FormBuilder,
    private authSrv: AuthService,
    private store: Store
  ) {}

  ngOnInit(): void {}
  loginSubmit() {
    console.log(this.loginForm.value.data);
    const { email, password, persistent } = this.loginForm.value
      .data as LoginForm;
    this.store.dispatch(login({ email, password }));
  }
  addUser() {
    this.authSrv.addUser().subscribe(console.log);
  }
}
