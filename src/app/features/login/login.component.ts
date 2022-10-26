import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from './services/auth.service';
import {
  configLoginForm,
  LoginForm,
  structureLoginForm,
} from './models/config';
import { Store } from '@ngrx/store';
import { signIn } from 'src/app/core/store/auth/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  structureLoginForm = structureLoginForm;
  loginForm = this.fb.group({
    data: this.fb.group(configLoginForm),
  });
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
    this.store.dispatch(signIn({ email, password }));
  }
  addUser() {
    this.authSrv.addUser().subscribe(console.log);
  }
}
