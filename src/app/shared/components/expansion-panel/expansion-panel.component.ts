import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-expansion-panel',
  template: `
    <div class="accordion">
      <label class="accordion-label align-center"
        ><input class="accordion-checkbox" type="checkbox" />
        <span> accordion </span>
      </label>
      <div class="accordion-content" #data>
        <div class="accordion-content-data">
          <p>
            Laborum et adipisicing excepteur ea quis ipsum est labore ullamco
            ullamco cillum. Commodo do magna aute veniam duis tempor pariatur.
            Ut dolor ex est officia occaecat quis consequat. Ad consectetur
            excepteur minim minim enim pariatur velit est ex adipisicing ex
          </p>
          <button>Ciao</button>
          <button>Ciao</button>
          <button>Ciao</button>
          <button>Ciao</button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      @use '../../../../styles/abstracts' as *;

      .accordion {
        border-radius: var(--b-radius-alpha);
        padding: var(--p-alpha);
        box-shadow: var(--box-shadow-alpha);
        background: var(--c-Florida);
        color: var(--c-Alaska);
        &-checkbox {
          display: none;
        }
        &-label {
          cursor: pointer;
          padding: 10px;
        }
        &-label:has(&-checkbox:checked) ~ &-content {
          overflow: auto;
          max-height: 500px;
        }
        &-content {
          @include hideScrollBar;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.9s, easy-in-out;
          &-data {
            padding: 10px;
          }
        }
      }
    `,
  ],
})
export class ExpansionPanelComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
