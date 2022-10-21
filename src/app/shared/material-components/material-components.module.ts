import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgIconComponent } from './svg-icon/svg-icon.component';

import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [SvgIconComponent],
  imports: [CommonModule, MatIconModule, MatFormFieldModule],
  exports: [SvgIconComponent],
})
export class MaterialComponentsModule {}
