import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { UtilityModule } from 'src/app/shared/modules/utility.module';
import { AllFormsRuleModule } from 'src/app/shared/modules/all-forms-rule.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    UtilityModule,
    AllFormsRuleModule,
  ],
})
export class LoginModule {}
