import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { refreshToken } from './core/store/auth/auth.action';
import { LocalStorageService as LS } from './core/services/local-storage/local-storage.service';
import { UserAgentService } from './core/services/user-agent/user-agent.service';
import { LS_VALUES } from './core/services/local-storage/local-storage-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private store: Store, private UA: UserAgentService) {
    LS.get(LS_VALUES.persistent) && this.store.dispatch(refreshToken());
    this.UA.setUserAgentData();
  }
}
