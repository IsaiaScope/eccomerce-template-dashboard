import { Component, Input, OnInit } from '@angular/core';
import { formBtnDefault } from './form-btn-model';

@Component({
  selector: 'app-form-btn',
  template: `
    <button class="form-btn" [disabled]="disable">
      {{ setUp.label }}
    </button>
  `,
  styles: [
    `
      .form-btn {
        width: 100%;
        border-radius: var(--b-radius-alpha);
        padding: var(--p-alpha);
        box-shadow: var(--box-shadow-alpha);
        font-size: var(--fs-alpha);
        background: var(--c-Florida);
      }
    `,
  ],
})
export class FormBtnComponent implements OnInit {
  @Input() setUp = formBtnDefault;
  @Input() disable = false;
  constructor() {}

  ngOnInit(): void {}
}
