import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SvgData, svgDataDefault } from './svg-model';

@Component({
  selector: 'app-svg-data',
  template: `
    <!-- https://www.npmjs.com/package/angular-svg-icon doc here -->
    <div [ngClass]="_setUp.wrapperClasses">
      <svg-icon
        class="grid"
        [src]="_setUp.path + _setUp.name + '.svg'"
        [svgClass]="_setUp.svgClasses"
      ></svg-icon>
    </div>
  `,
  styles: [
    `
      .svg {
        &-share-default {
          width: var(--svg-dimension-alpha);
          height: var(--svg-dimension-alpha);
        }

        &-icon-default {
          fill: green;
        }

        &-wrapper-default {
          background-color: red;
          margin-right: var(--m-alpha);
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgDataComponent {
  _setUp: SvgData;

  @Input() set setUp(v: SvgData) {
    this._setUp = {
      ...svgDataDefault,
      ...v,
      wrapperClasses: this.combineWC(v, svgDataDefault),
      svgClasses: this.combineSC(v, svgDataDefault),
    };
  }

  constructor() {}

  combineSC(v: SvgData, def: SvgData) {
    return [
      ...(v.shareDimClass || def.shareDimClass!),
      ...(v.svgClasses || def.svgClasses!),
    ];
  }

  combineWC(v: SvgData, def: SvgData) {
    return [
      ...(v.shareDimClass || def.shareDimClass!),
      ...(v.wrapperClasses || def.wrapperClasses!),
    ];
  }
}
