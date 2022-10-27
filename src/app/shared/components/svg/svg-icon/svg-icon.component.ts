import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SvgIcon, svgIconDefault } from './svg-icon-model';

@Component({
  selector: 'app-svg-icon',
  template: `
    <svg-icon
      class="grid"
      [src]="_setUp.path + _setUp.iconName + '.svg'"
      [svgClass]="_setUp.svgClasses"
    ></svg-icon>
    <!-- https://www.npmjs.com/package/angular-svg-icon doc here -->
  `,
  styles: [
    `
      .svg-default {
        width: var(--svg-dimension-alpha);
        height: var(--svg-dimension-alpha);
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconComponent {
  _setUp = svgIconDefault;

  @Input() set setUp(v: SvgIcon) {
    this._setUp = {
      ...svgIconDefault,
      ...v,
    };
  }

  constructor() {}
}
