import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { loginConfig, LoginForm } from './utility/login-config';
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
  config = loginConfig;
  loginForm = this.fb.group({
    data: this.fb.group(loginConfig.formField),
  });
  isLoggingIn$ = this.store
    .select(selectAuthState)
    .pipe(map(({ isLoggingIn }) => isLoggingIn));
  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {}
  loginSubmit() {
    console.log(this.loginForm.value.data);
    const { email, password, persistent } = this.loginForm.value
      .data as LoginForm;
    this.store.dispatch(login({ email, password, persistent }));
  }
}
