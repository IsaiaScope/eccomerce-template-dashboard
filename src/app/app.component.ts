import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { refreshToken } from './core/store/auth/auth.action';
import {
  LocalStorageService as LS,
  LS_VALUES,
} from './core/services/utility/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private store: Store) {
    LS.get(LS_VALUES.persistent) && this.store.dispatch(refreshToken());
  }
}
