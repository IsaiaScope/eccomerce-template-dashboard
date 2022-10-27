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
  template: ` <div [formGroup]="form" class="flex-center">
    <input type="checkbox" [formControlName]="setUp.formControlName" />
    <label *ngIf="setUp.label">{{ setUp.label }}</label>
  </div>`,
  styles: [],
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
