import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { SvgIconRegistryService } from 'angular-svg-icon';
import { SvgData, svgDataDefault } from './svg-model';

@Component({
  selector: 'app-svg-data',
  template: `
    <!-- https://www.npmjs.com/package/angular-svg-icon doc here -->
    <div #wrapper [ngClass]="{ skeleton: !(icon$ | async) }">
      <svg-icon
        class="grid"
        [src]="_setUp.path + _setUp.name + '.svg'"
        [svgClass]="_setUp.svgClasses | cssFromObj"
      ></svg-icon>
    </div>
  `,
  styles: [
    `
      .svg {
        &-dim-default {
          width: var(--svg-dimension-alpha);
          height: var(--svg-dimension-alpha);
        }

        &-fill-default {
          fill: var(--c-Arizona);
        }

        &-filter-default {
          filter: var(--box-shadow-gamma);
        }

        &-wrapper {
          &-form {
            margin-right: var(--m-alpha);
          }
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgDataComponent {
  @ViewChild('wrapper', { static: true }) wrapper: ElementRef;
  _setUp: SvgData;
  icon$: any;

  constructor(private iconReg: SvgIconRegistryService) {}

  @Input() set setUp(v: SvgData) {
    const mergeSvgCss: Record<string, string | string[]> = {
      ...svgDataDefault.svgClasses,
      ...v.svgClasses,
    };

    this._setUp = {
      ...svgDataDefault,
      ...v,
      svgClasses: mergeSvgCss,
    };

    this.wrapper.nativeElement.classList.add(
      ...[this._setUp.svgClasses?.dim].flat(),
      ...(this._setUp.wrapperClasses || [])
    );

    this.icon$ = this.iconReg.loadSvg(
      `${this._setUp.path}${this._setUp.name}.svg`
    );
  }
}
