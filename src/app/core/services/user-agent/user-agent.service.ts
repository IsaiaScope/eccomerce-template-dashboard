import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as UAParser from 'ua-parser-js';
import { saveUAInfo } from '../../store/device/device.action';

@Injectable({
  providedIn: 'root',
})
export class UserAgentService {
  UA = new UAParser();

  constructor(private store: Store) {}

  setUserAgentData() {
    console.log(this.UA.getResult());
    const { browser, os, device } = this.UA.getResult();
    this.store.dispatch(saveUAInfo({ browser, os, device }));
  }
}
