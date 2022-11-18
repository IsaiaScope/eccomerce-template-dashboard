import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CssFromObjPipe } from './pipes/css-from-obj.pipe';



@NgModule({
  declarations: [CssFromObjPipe],
  exports: [CssFromObjPipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
