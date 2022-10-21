import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInputComponent } from './form-input/form-input.component';
import { AllFormsRuleModule } from '../modules/all-forms-rule.module';
import { FormBtnComponent } from './form-btn/form-btn.component';
import { FormCheckboxComponent } from './form-checkbox/form-checkbox.component';

@NgModule({
  declarations: [FormInputComponent, FormBtnComponent, FormCheckboxComponent],
  imports: [CommonModule, AllFormsRuleModule],
  exports: [FormInputComponent, FormBtnComponent, FormCheckboxComponent],
})
export class ComponentsModule {}
