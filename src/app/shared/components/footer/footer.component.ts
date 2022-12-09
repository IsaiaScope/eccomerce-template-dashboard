import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: ` <footer>footer works!</footer> `,
  styles: [
    `
      footer {
        background-color: black;
        color: white;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
