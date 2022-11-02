import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as auth from './auth/auth.reducer';
import * as device from './device/device.reducer';
export interface State {
  auth: auth.State;
  device: device.State;
}

export const reducers: ActionReducerMap<State> = {
  auth: auth.reducer,
  device: device.reducer,
};

export const selectAuthState = createFeatureSelector<State['auth']>('auth');
export const selectDeviceState =
  createFeatureSelector<State['device']>('device');
