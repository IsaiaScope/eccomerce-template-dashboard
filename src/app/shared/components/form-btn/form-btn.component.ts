import { Component, Input, OnInit } from '@angular/core';
import { formBtnDefault } from './form-btn-model';

@Component({
  selector: 'app-form-btn',
  template: ` <button [disabled]="disable">{{ setUp.label }}</button> `,
  styles: [],
})
export class FormBtnComponent implements OnInit {
  @Input() setUp = formBtnDefault;
  @Input() disable = false;
  constructor() {}

  ngOnInit(): void {}
}
