import { Action, createReducer, on } from '@ngrx/store';
import { IBrowser, IDevice, IOS } from 'ua-parser-js';
import * as deviceAction from './device.action';

export interface State {
  browser: IBrowser | null;
  os: IOS | null;
  device: IDevice | null;
}

export const initialState: State = {
  browser: null,
  os: null,
  device: null,
};

const deviceReducer = createReducer(
  initialState,
  on(deviceAction.saveUAInfo, (state: State, { browser, os, device }) => ({
    ...state,
    browser,
    os,
    device,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return deviceReducer(state, action);
}
