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
    <ng-container *ngIf="setUp.formGroupName && setUp.formControlName">
      <div [formGroup]="form" class="flex-center">
        <app-svg-icon
          *ngIf="setUp.frontIcon"
          [setUp]="setUp.frontIcon"
        ></app-svg-icon>
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
