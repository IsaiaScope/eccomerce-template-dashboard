import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { formInputDefault } from './form-input-model';

@Component({
  selector: 'app-form-input',
  template: `
    <div [formGroup]="form" class="flex-center form-input-container">
      <app-svg-data
        *ngIf="setUp.frontIcon"
        [setUp]="setUp.frontIcon"
      ></app-svg-data>
      <input
        [type]="setUp.type || 'text'"
        [placeholder]="setUp.placeholder"
        [formControlName]="setUp.formControlName"
      />
    </div>
    <!-- {{ this.form.value | json }} -->
  `,
  styles: [
    `
      .form-input {
        &-container {
          padding-block: var(--p-gamma);
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormInputComponent implements OnInit {
  @Input() setUp = formInputDefault;
  form: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get(
      this.setUp.formGroupName
    ) as FormGroup;
  }
}
