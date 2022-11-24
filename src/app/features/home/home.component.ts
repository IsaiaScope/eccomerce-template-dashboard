import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { switchMap, timer } from 'rxjs';
import { DbService } from 'src/app/core/services/utility/db.service';
import { logout } from 'src/app/core/store/auth/auth.action';
import { AuthService } from '../login/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  clusterInfo$ = timer(0, 25000).pipe(
    switchMap(() => this.dbSrv.getClusterInfo())
  );

  constructor(
    private store: Store,
    private dbSrv: DbService,
    private authSrv: AuthService
  ) {}
  ngOnInit(): void {}

  logoutClick() {
    this.store.dispatch(logout());
  }
  addUser() {
    this.authSrv.addUser().subscribe(console.log);
  }
}
