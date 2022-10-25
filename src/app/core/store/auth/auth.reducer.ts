import { Action, createReducer, on } from '@ngrx/store';
import * as authAction from './auth.action';
import { AuthService } from '../../../features/login/services/auth.service';

export interface State {
  isAuth: boolean;
  loading: boolean;
  accessToken: string;
  userInfo: {
    userId: string;
    iat: number;
    exp: number;
  } | null;
}

export const initialState: State = {
  isAuth: false,
  loading: false,
  accessToken: '',
  userInfo: null,
};

const authReducer = createReducer(
  initialState,
  on(authAction.signIn, (state: State) => ({ ...state, loading: true })),
  on(authAction.signInSuccess, (state: State, { accessToken }) => ({
    ...state,
    isAuth: true,
    loading: false,
    accessToken,
    userInfo: AuthService.parseJwt(accessToken),
  })),
  on(authAction.refreshToken, (state: State, { accessToken }) => ({
    ...state,
    isAuth: true,
    accessToken,
    userInfo: AuthService.parseJwt(accessToken),
  }))
  //   on(AuthAction.savePincode,
  //     (state: State, payload) => ({...state, pincode: payload.pincode})),
  //   on(AuthAction.signInPincode, (state: State) => ({...state, isAuth: true})),
  //   on(AuthAction.signOut, () => ({...initialState, pincode: localStorage.getItem(environment.pincodeName)})),
  //   on(AuthAction.resetPincodeState, state => ({...state, pincode: null})),
  //   on(AuthAction.resetUser, state => ({...state, resetUser: true}))
);

export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action);
}
