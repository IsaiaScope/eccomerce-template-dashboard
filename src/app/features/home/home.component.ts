import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { switchMap, timer } from 'rxjs';
import { ProductsService } from 'src/app/core/services/utility/products.service';
import { logout } from 'src/app/core/store/auth/auth.action';
import { AuthService } from '../login/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  someData$ = this.prodSrv.someData();
  someData2$ = timer(0, 7000).pipe(switchMap(() => this.prodSrv.someData2()));
  someData3$ = timer(0, 3000).pipe(switchMap(() => this.prodSrv.someData3()));
  constructor(private store: Store, private prodSrv: ProductsService) {}
  ngOnInit(): void {}

  logoutClick() {
    this.store.dispatch(logout());
  }
}
