import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cssFromObj',
})
export class CssFromObjPipe implements PipeTransform {
  transform(
    v: Record<string, string | string[]>,
    extraClasses: string[] | string = []
  ): string[] {
    return [
      ...(typeof extraClasses === 'string' ? [extraClasses] : extraClasses),
      ...Reflect.ownKeys(v).flatMap((x) => v[x as string]),
    ];
  }
}
