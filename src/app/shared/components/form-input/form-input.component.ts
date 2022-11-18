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
        [ngClass]="{ 'form-input-inside-icon': setUp.insideIcon }"
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
      .form {
        &-input {
          width: 100%;
          border-radius: var(--b-radius-alpha);
          padding: var(--p-alpha);
          box-shadow: var(--box-shadow-beta);

          &-inside-icon {
            /* NOTE adjust in case icon standard dim ain't 2em no more */
            padding-right: 2.6em;
          }
        }
      }
      .inside-icon {
        &-position {
          right: 0;
          position: absolute;
          margin-right: var(--m-alpha);
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
    console.log(type);
    this.input.nativeElement.type = map[type].type;
    this.setUp = {
      ...this.setUp,
      insideIcon: { ...this.setUp.insideIcon, name: map[type].icon },
    };
  }
}
