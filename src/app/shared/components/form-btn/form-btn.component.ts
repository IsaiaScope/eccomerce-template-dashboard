import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { formBtnDefault } from './form-btn-model';

@Component({
  selector: 'app-form-btn',
  template: `
    <button class="form-btn" [disabled]="disable">
      {{ setUp.label | titlecase }}
      {{ disable }}
    </button>
  `,
  styles: [
    `
      .form-btn {
        width: 100%;
        border-radius: var(--b-radius-alpha);
        padding: var(--p-alpha);
        box-shadow: var(--box-shadow-alpha);
        background: var(--c-Florida);
        color: var(--c-Alaska);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormBtnComponent implements OnInit {
  @Input() setUp = formBtnDefault;
  @Input() disable = false;
  constructor() {}

  ngOnInit(): void {}
}
