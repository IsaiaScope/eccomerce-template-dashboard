import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SvgData, svgIconDefault, svgImgDefault } from './svg-model';

@Component({
  selector: 'app-svg-data',
  template: `
    <!-- https://www.npmjs.com/package/angular-svg-icon doc here -->
    <div
      [class]="_setUp.name ? '' : 'skeleton'"
      [ngClass]="_setUp.wrapperClasses"
    >
      <svg-icon
        class="grid"
        [src]="_setUp.path + _setUp.name + '.svg'"
        [svgClass]="_setUp.svgClasses"
      ></svg-icon>
    </div>
  `,
  styleUrls: [`./svg-data.scss`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgDataComponent {
  _setUp: SvgData;

  @Input() set setUp(v: SvgData) {
    switch (v.type) {
      case 'icon':
        this._setUp = {
          ...svgIconDefault,
          ...v,
          wrapperClasses: this.combineWC(v, svgIconDefault),
          svgClasses: this.combineSC(v, svgIconDefault),
        };
        break;
      case 'img':
        this._setUp = {
          ...svgImgDefault,
          ...v,
          wrapperClasses: this.combineWC(v, svgImgDefault),
          svgClasses: this.combineSC(v, svgImgDefault),
        };
        break;
    }
  }

  constructor() {}

  combineSC(v: SvgData, def: SvgData) {
    return [
      ...(v.shareDimClass || def.shareDimClass!),
      ...(v.svgClasses || []),
    ];
  }

  combineWC(v: SvgData, def: SvgData) {
    return [
      ...(v.shareDimClass || def.shareDimClass!),
      ...def.wrapperClasses!,
      ...(v.wrapperClasses || []),
    ];
  }
}
