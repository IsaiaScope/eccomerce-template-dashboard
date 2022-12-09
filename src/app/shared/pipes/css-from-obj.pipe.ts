import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cssFromObj',
})
export class CssFromObjPipe implements PipeTransform {
  transform(v: any, extraCss: string[] | string = []): string[] {
    return [
      ...(typeof extraCss === 'string' ? [extraCss] : extraCss),
      ...Reflect.ownKeys(v).flatMap((x) => v[x as string]),
    ];
  }
}
