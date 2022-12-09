import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { defCustomBtn } from './custom-btn-model';

@Component({
  selector: 'app-custom-btn',
  template: `
    <button [class]="btnData.css | cssFromObj: 'w-100'">
      {{ btnData.label }}
    </button>
  `,
  styles: [
    `
      .luffy {
        color: rgb(255, 255, 255);
        padding: 8px;
        border-radius: 6px;
        box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 8px 1px;
        border: 2px solid rgb(28, 110, 164);
        display: inline-block;
      }
      .myButton:hover {
        background: #1c6ea4;
      }
      .myButton:active {
        background: #144e75;
      }
      .zoro {
      }
      .sanji {
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomBtnComponent implements OnInit {
  @Input() btnData = defCustomBtn;
  constructor() {}

  ngOnInit(): void {}
}
