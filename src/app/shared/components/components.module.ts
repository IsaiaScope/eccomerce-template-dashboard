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
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { CustomBtnComponent } from './custom-btn/custom-btn.component';
import { ActionsLabelComponent } from './actions-label/actions-label.component';

@NgModule({
  declarations: [
    FormInputComponent,
    FormBtnComponent,
    FormCheckboxComponent,
    SvgDataComponent,
    ImgWrapperComponent,
    HeaderComponent,
    FooterComponent,
    ExpansionPanelComponent,
    CustomBtnComponent,
    ActionsLabelComponent,
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
    HeaderComponent,
    FooterComponent,
    ExpansionPanelComponent,
    CustomBtnComponent,
    ActionsLabelComponent,
  ],
})
export class ComponentsModule {}
