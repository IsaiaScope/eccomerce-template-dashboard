import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { SvgIconService } from './core/services/svg-icon.service';
import { refreshToken } from './core/store/auth/auth.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private iconSrv: SvgIconService, private store: Store) {
    this.iconSrv.register();
    // this.store.dispatch(refreshToken())
  }
}
