import {
  ActionReducerMap,
  createFeatureSelector,
  MetaReducer,
} from '@ngrx/store';
import * as custom from './custom/custom.reducer';

export interface State {
  custom: custom.State;
}

export const reducers: ActionReducerMap<State> = {
  custom: custom.reducer,
};

export const selectCustomState =
  createFeatureSelector<State['custom']>('custom');

export const metaReducers: MetaReducer<State>[] = [];

// import {createFeatureSelector} from '@ngrx/store';
// import * as auth from './reducer/auth.reducer';
// import * as connection from './reducer/connection-status.reducer';
// import * as media from './reducer/media.reducer';
// import * as player from './reducer/player.reducer';
// import * as theme from './reducer/theme.reducer';
// import * as idb from './reducer/idb.reducer';

// export interface AppState {
//   auth: auth.State;
//   connection: connection.State;
//   media: media.State;
//   player: player.State;
//   theme: theme.State;
//   idb: idb.State;
// }

// export const reducers = {
//   auth: auth.reducer,
//   connection: connection.reducer,
//   media: media.reducer,
//   player: player.reducer,
//   theme: theme.reducer,
//   idb: idb.reducer
// };

// export const selectAuthState = createFeatureSelector<AppState['auth']>('auth');
// export const selectConnectionState = createFeatureSelector<AppState['connection']>('connection');
// export const selectMediaState = createFeatureSelector<AppState['media']>('media');
// export const selectPlayerState = createFeatureSelector<AppState['player']>('player');
// export const selectThemeState = createFeatureSelector<AppState['theme']>('theme');
// export const selectIdbState = createFeatureSelector<AppState['idb']>('idb');
