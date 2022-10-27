import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as auth from './auth/auth.reducer';
export interface State {
  auth: auth.State;
}

export const reducers: ActionReducerMap<State> = {
  auth: auth.reducer,
};

export const selectAuthState = createFeatureSelector<State['auth']>('auth');
