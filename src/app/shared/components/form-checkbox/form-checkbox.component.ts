import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { FormCheckBoxDefault } from './form-checkbox-model';

@Component({
  selector: 'app-form-checkbox',
  template: ` <div
    [formGroup]="form"
    class="align-center"
    [ngClass]="setUp.wrapperClasses"
  >
    <input
      type="checkbox"
      [formControlName]="setUp.formControlName"
      class="form-checkbox-input"
    />
    <label *ngIf="setUp.label" class='class="form-checkbox-input"'>{{
      setUp.label
    }}</label>
  </div>`,
  styles: [
    `
      .form-checkbox {
        &-input {
          margin-right: var(--m-alpha);
          cursor: pointer;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormCheckboxComponent implements OnInit {
  @Input() setUp = FormCheckBoxDefault;
  form: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get(
      this.setUp.formGroupName
    ) as FormGroup;
  }
}
