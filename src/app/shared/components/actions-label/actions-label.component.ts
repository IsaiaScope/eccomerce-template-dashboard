import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actions-label',
  template: `
    <div>
      <label for="">some text</label>
      <ng-container *ngFor="let btn of btns">
        <app-custom-btn [title]="'carlo'"></app-custom-btn>
      </ng-container>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionsLabelComponent implements OnInit {
  btns = [1, 1, 1, 1, 11];

  constructor() {}

  ngOnInit(): void {}
}
