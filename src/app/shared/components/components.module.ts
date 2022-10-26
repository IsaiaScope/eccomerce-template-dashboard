import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInputComponent } from './form-input/form-input.component';
import { AllFormsRuleModule } from '../modules/all-forms-rule.module';
import { FormBtnComponent } from './form-btn/form-btn.component';
import { FormCheckboxComponent } from './form-checkbox/form-checkbox.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SvgIconComponent } from './svg/svg-icon/svg-icon.component';

@NgModule({
  declarations: [
    FormInputComponent,
    FormBtnComponent,
    FormCheckboxComponent,
    SvgIconComponent,
  ],
  imports: [CommonModule, AllFormsRuleModule, AngularSvgIconModule.forRoot()],
  exports: [
    FormInputComponent,
    FormBtnComponent,
    FormCheckboxComponent,
    SvgIconComponent,
  ],
})
export class ComponentsModule {}
