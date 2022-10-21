import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { configLoginForm, structureLoginForm } from './models/config';

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
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
  loginSubmit() {
    console.log(this.loginForm.value.data);
  }
}
