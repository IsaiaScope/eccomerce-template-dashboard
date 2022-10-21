import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-custom',
  template: `
    <div>
      <input type="text" />
      <input type="text" />
    </div>
  `,
  styles: [],
})
export class InputCustomComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
