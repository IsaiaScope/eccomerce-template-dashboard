import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputCustomComponent } from './input-custom/input-custom.component';

@NgModule({
  declarations: [InputCustomComponent],
  imports: [CommonModule],
  exports: [InputCustomComponent],
})
export class ComponentsModule {}
