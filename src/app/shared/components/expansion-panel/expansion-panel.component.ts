import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-expansion-panel',
  template: `
    <div class="wrapper">
      <div (click)="toggle()" class="header">Title</div>
      <div class="content" [ngClass]="{ open: isOpen }" #content>
        <p #data>
          Laborum et adipisicing excepteur ea quis ipsum est labore ullamco
          ullamco cillum. Commodo do magna aute veniam duis tempor pariatur. Ut
          dolor ex est officia occaecat quis consequat. Ad consectetur excepteur
          minim minim enim pariatur velit est ex adipisicing ex velit magna.
          Elit aliqua labore veniam dolore nulla ea est aute. Mollit adipisicing
          cillum voluptate id consequat laborum. Reprehenderit mollit minim ut
          sunt adipisicing aute incididunt veniam cupidatat adipisicing minim
          cupidatat. Voluptate nostrud in ipsum in non culpa veniam ullamco.
          Aute qui in ex amet laboris pariatur aliqua sunt. Ipsum cupidatat
          dolore amet sunt commodo anim laboris laboris enim culpa magna
          deserunt consectetur ad. Eu veniam ullamco magna mollit qui elit.
        </p>
      </div>
    </div>
  `,
  styles: [
    `
      .content {
        background-color: red;
        height: 0;
        visibility: hidden;
        opacity: 0;
        transition: 2s easy-in-out;
      }
      .open {
        background-color: yellow;
        visibility: visible;
        opacity: 1;
      }
      .header {
        background-color: green;
      }
    `,
  ],
})
export class ExpansionPanelComponent implements OnInit {
  @ViewChild('content', { static: true }) content: ElementRef;
  @ViewChild('data', { static: true }) data: ElementRef;
  isOpen = false;
  constructor() {}

  ngOnInit(): void {}
  toggle() {
    // console.log(this.content.nativeElement.outerHeight(true));
    if (this.isOpen) {
      this.content.nativeElement.style.height = `${this.data.nativeElement.offsetHeight}px`;
    } else {
      this.content.nativeElement.style.height = `0px`;
    }
    this.isOpen = !this.isOpen;
    console.log(this.content);
  }
}
