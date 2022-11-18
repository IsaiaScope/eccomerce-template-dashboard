import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cssFromObj',
})
export class CssFromObjPipe implements PipeTransform {
  transform(v: any): string[] {
    return Reflect.ownKeys(v).flatMap((x) => v[x as string]);
  }
}
