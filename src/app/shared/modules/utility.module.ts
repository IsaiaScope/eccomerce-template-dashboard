import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ComponentsModule, MaterialComponentsModule],
  exports: [ComponentsModule, MaterialComponentsModule],
})
export class UtilityModule {}
