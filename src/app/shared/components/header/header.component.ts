import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: ` <header>header works!</header> `,
  styles: [
    `
      header {
        background-color: black;
        color: white;
      }
    `,
  ],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
