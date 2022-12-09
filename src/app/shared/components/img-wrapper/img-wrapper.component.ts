import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { HelperService } from 'src/app/core/services/utility/helper.service';
import { ImgWrapper, imgWrapperDefault } from './img-wrapper-config';

@Component({
  selector: 'app-img-wrapper',
  template: `
    <div #wrapper [ngClass]="{ skeleton: !(img$ | async) }">
      <img
        #img
        class="img-default h-100 opacity-hide"
        [ngClass]="{ 'opacity-show': img$ | async }"
        [src]="_setUp.url || _setUp.path + _setUp.name + _setUp.type"
        alt="login form image on top"
        loading="lazy"
      />
    </div>
  `,
  styles: [
    `
      .img {
        &-default {
          object-fit: cover;
          object-position: center;
        }
      }
      .wrapper {
        &-default {
          overflow: hidden;
        }
        &-half-way {
          transform: translateY(calc(-10% - var(--p-beta)));
          margin: auto;
        }
        &-dim-alpha {
          height: var(--img-dimension-alpha);
          width: var(--img-dimension-alpha);
        }
        &-circle {
          background-color: var(--c-Connecticut);
          border-radius: var(--b-radius-beta);
          border: var(--b-alpha);
          box-shadow: var(--box-shadow-alpha);
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImgWrapperComponent implements OnInit {
  @ViewChild('img', { static: true }) img: ElementRef;
  @ViewChild('wrapper', { static: true }) wrapper: ElementRef;

  _setUp: ImgWrapper;
  img$: Observable<unknown>;

  @Input() set setUp(v: ImgWrapper) {
    this._setUp = {
      ...imgWrapperDefault,
      ...v,
    };

    this.wrapper.nativeElement.classList.add(
      ...this.helpSrv.setClasses(
        imgWrapperDefault.wrapperClasses,
        v.keepDefCss,
        v.wrapperClasses
      )
    );
  }

  constructor(private helpSrv: HelperService) {}

  ngOnInit(): void {
    this.img$ = fromEvent(this.img.nativeElement, 'load');
  }
}
