import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actions-label',
  template: `
    <div>
      <label for="">some text</label>
      <ng-container *ngFor="let btn of btns">
        <app-custom-btn></app-custom-btn>
      </ng-container>
    </div>
  `,
  styles: [],
})
export class ActionsLabelComponent implements OnInit {
  btns = [1, 1, 1, 1, 11];

  constructor() {}

  ngOnInit(): void {}
}
