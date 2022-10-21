import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgRxModule } from './core/store/ngRx.module';
import { UtilityModule } from './shared/modules/utility.module';
import { AllFormsRuleModule } from './shared/modules/all-forms-rule.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgRxModule,
    UtilityModule,
    AllFormsRuleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
