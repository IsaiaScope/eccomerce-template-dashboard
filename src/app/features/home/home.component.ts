import { Component, OnInit } from '@angular/core';
import {
  interval,
  Observable,
  pipe,
  startWith,
  switchMap,
  tap,
  timer,
} from 'rxjs';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  someData$ = timer(0, 5000).pipe(switchMap(() => this.prodSrv.someData()));
  someData2$ = timer(0, 5000).pipe(switchMap(() => this.prodSrv.someData2()));
  constructor(private prodSrv: ProductsService) {}
  ngOnInit(): void {}
}
