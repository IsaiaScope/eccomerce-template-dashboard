import { Component, Input, OnInit } from '@angular/core';
import { SvgData } from '../svg/svg-model';

@Component({
  selector: 'app-expansion-panel',
  template: `
    <div class="accordion">
      <label class="accordion-label flex  s-between">
        <input
          class="accordion-checkbox"
          (change)="handleCheckStatus($event)"
          type="checkbox"
          checked
        />
        <div class=" align-center">
          <span class="accordion-title"> {{ setUp.title }} </span>
          <app-svg-data class="svg" [setUp]="svg"></app-svg-data>
        </div>
        <div class="align-center">
          <ng-content select=".accordion-header-btn"></ng-content>
        </div>
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
        margin-bottom: 2em;
        margin-inline: 1.5em;
        /* width: fit-content; */
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
            transition: transform 0.4s;
          }
        }
        &-label:has(&-checkbox:checked) {
          & ~ .accordion-content {
            max-height: 500em;
            transition: max-height 1s ease-in-out;
          }
          & .svg {
            transform: rotate(180deg);
          }
        }

        &-title {
          margin-right: 0.7em;
        }

        &-content {
          max-height: 0;
          transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
          overflow: scroll;
          @include hideScrollBar;
          &-data {
            padding: 0.8em;
          }
        }
      }
    `,
  ],
})
export class ExpansionPanelComponent implements OnInit {
  @Input() setUp = { title: '' };
  svg: SvgData = { name: 'arrow_circle_down' };
  constructor() {}

  ngOnInit(): void {}

  handleCheckStatus(e: Event) {
    console.log((e.target as HTMLInputElement).checked);
  }
}
