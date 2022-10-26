import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  template: `<svg-icon
    class="grid"
    [src]="path + iconName + '.svg'"
  ></svg-icon>`,
  styles: [``],
})
export class SvgIconComponent implements OnInit {
  @Input() iconName = '';
  path = '../../../assets/svgs/icons/';
  constructor() {}

  ngOnInit(): void {}
}
