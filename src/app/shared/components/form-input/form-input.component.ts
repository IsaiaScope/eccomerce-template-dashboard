import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { formInputDefault } from './form-input-model';

@Component({
  selector: 'app-form-input',
  template: `
    <ng-container *ngIf="setUp.formGroupName && setUp.formControlName">
      <div [formGroup]="form">
        <input
          [type]="setUp.type || 'text'"
          [placeholder]="setUp.placeholder"
          [formControlName]="setUp.formControlName"
        />
      </div>
      <!-- {{ this.form.value | json }} -->
    </ng-container>
  `,
  styles: [],
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
