import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-btn',
  template: ` <button>{{ title }}</button> `,
  styles: [],
})
export class CustomBtnComponent implements OnInit {
  @Input() title = '';
  constructor() {}

  ngOnInit(): void {}
}
