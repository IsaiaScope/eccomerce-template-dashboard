import { Component, OnInit } from '@angular/core';
import { SvgData } from '../svg/svg-model';

@Component({
  selector: 'app-expansion-panel',
  template: `
    <div class="accordion">
      <label class="accordion-label align-center"
        ><input class="accordion-checkbox" type="checkbox" checked />
        <span> accordion </span>
        <app-svg-data class="svg" [setUp]="svg"></app-svg-data>
      </label>
      <div class="accordion-content" #data>
        <div class="accordion-content-data">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      @use '../../../../styles/abstracts' as *;
      .accordion {
        box-shadow: var(--box-shadow-alpha);
        background: red;
        // smooth bottom corner
        overflow: hidden;
        &-checkbox {
          display: none;
        }
        &,
        &-label {
          border-radius: var(--b-radius-alpha);
        }
        &-label {
          padding: var(--p-alpha);
          color: var(--c-Alaska);
          background: var(--c-Florida);

          cursor: pointer;
          .svg {
            transition: all 0.5s;
          }
        }
        &-label:has(&-checkbox:checked) {
          & ~ .accordion-content {
            max-height: 1000em;
            transition: max-height 1.5s ease-in-out;
          }
          & .svg {
            transform: rotate(180deg);
          }
        }

        &-content {
          max-height: 0;
          transition: max-height 0.75s cubic-bezier(0, 1, 0, 1);
          overflow: scroll;
          @include hideScrollBar;
          &-data {
            padding: 10px;
          }
        }
      }
    `,
  ],
})
export class ExpansionPanelComponent implements OnInit {
  svg: SvgData = { name: 'arrow_circle_down' };
  constructor() {}

  ngOnInit(): void {}
}
