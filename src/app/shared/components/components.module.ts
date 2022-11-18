import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInputComponent } from './form-input/form-input.component';
import { AllFormsRuleModule } from '../modules/all-forms-rule.module';
import { FormBtnComponent } from './form-btn/form-btn.component';
import { FormCheckboxComponent } from './form-checkbox/form-checkbox.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SvgDataComponent } from './svg/svg-data.component';
import { ImgWrapperComponent } from './img-wrapper/img-wrapper.component';
import { PipesModule } from '../pipes.module';

@NgModule({
  declarations: [
    FormInputComponent,
    FormBtnComponent,
    FormCheckboxComponent,
    SvgDataComponent,
    ImgWrapperComponent,
  ],
  imports: [
    CommonModule,
    AllFormsRuleModule,
    AngularSvgIconModule.forRoot(),
    PipesModule,
  ],
  exports: [
    FormInputComponent,
    FormBtnComponent,
    FormCheckboxComponent,
    SvgDataComponent,
    ImgWrapperComponent,
  ],
})
export class ComponentsModule {}
