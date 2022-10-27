import { Action, createReducer, on } from '@ngrx/store';
import * as authAction from './auth.action';
import { AuthService } from '../../../features/login/services/auth.service';

export interface State {
  isAuth: boolean;
  isLoggingIn: boolean;
  isLoggingOut: boolean;
  isRefreshing: boolean;
  accessToken: string | null;
  userInfo: {
    userId: string;
    iat: number;
    exp: number;
  } | null;
}

export const initialState: State = {
  isAuth: false,
  isLoggingIn: false,
  isLoggingOut: false,
  isRefreshing: false,
  accessToken: null,
  userInfo: null,
};

const authReducer = createReducer(
  initialState,
  on(authAction.login, (state: State) => ({ ...state, isLoggingIn: true })),
  on(authAction.loginSuccess, (state: State, { accessToken }) => ({
    ...state,
    isAuth: true,
    isLoggingIn: false,
    accessToken,
    userInfo: AuthService.parseJwt(accessToken),
  })),
  on(authAction.refreshToken, (state: State) => ({
    ...state,
    isRefreshing: true,
    accessToken: null,
  })),
  on(authAction.refreshTokenSuccess, (state: State, { accessToken }) => ({
    ...state,
    isAuth: true,
    isRefreshing: false,
    accessToken,
    userInfo: AuthService.parseJwt(accessToken),
  })),
  on(authAction.logout, (state: State) => ({
    ...state,
    isLoggingOut: true,
  })),
  on(authAction.logoutSuccess, () => ({
    ...initialState,
  })),
  on(authAction.authError, (state: State) => ({
    ...state,
    isRefreshing: false,
    isLoggingIn: false,
    isLoggingOut: false,
    isAuth: false,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action);
}
