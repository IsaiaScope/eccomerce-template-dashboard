import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { formInputDefault } from './form-input-model';

@Component({
  selector: 'app-form-input',
  template: `
    <div
      [formGroup]="form"
      class="flex-center"
      [ngClass]="setUp.wrapperClasses"
    >
      <app-svg-data
        *ngIf="setUp.frontIcon"
        [setUp]="setUp.frontIcon"
      ></app-svg-data>
      <input
        #input
        class="form-input"
        [type]="setUp.type || 'text'"
        [placeholder]="setUp.placeholder"
        [formControlName]="setUp.formControlName"
        [ngClass]="setUp.inputClasses"
      />
      <app-svg-data
        (click)="toggleVisibility(input.type)"
        *ngIf="setUp.insideIcon"
        [setUp]="setUp.insideIcon"
        class="inside-icon-position"
      ></app-svg-data>
    </div>
    <!-- {{ this.form.value | json }} -->
  `,
  styles: [
    `
      .form-input {
        width: 100%;
        border-radius: var(--b-radius-alpha);
        padding: var(--p-alpha);
        box-shadow: var(--box-shadow-beta);
        &-padding-alpha {
          padding-right: var(--form-input-padding-alpha);
        }
      }
      .inside-icon {
        &-position {
          right: 0;
          position: absolute;
          margin-right: var(--m-alpha);
          cursor: pointer;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormInputComponent implements OnInit {
  @ViewChild('input', { static: true }) input: ElementRef;
  @Input() setUp = formInputDefault;
  form: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get(
      this.setUp.formGroupName
    ) as FormGroup;
  }
  toggleVisibility(type: string) {
    const map: Record<string, { type: string; icon: string }> = {
      text: { type: 'password', icon: 'visibility_off' },
      password: { type: 'text', icon: 'visibility' },
    };
    this.input.nativeElement.type = map[type].type;
    this.setUp = {
      ...this.setUp,
      insideIcon: { ...this.setUp.insideIcon, name: map[type].icon },
    };
  }
}
