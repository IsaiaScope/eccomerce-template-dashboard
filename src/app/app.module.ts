import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgRxModule } from './core/store/ngRx.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgRxModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
