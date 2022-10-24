// import {Action, createReducer, on} from '@ngrx/store';
// import * as AuthAction from '../action/auth.actions';
// import {CognitoStateModel} from '../../model/cognito-state.model';
// import {SignInModelResponse} from '../../model/auth.model';
// import {environment} from '../../../../environments/environment';

// export const authFeatureKey = 'auth';

// export interface State {
//   isAuth: boolean;
//   cognitoState: CognitoStateModel | null;
//   ddsState: SignInModelResponse | null;
//   pincode: string | null;
//   resetUser: boolean;
// }

// export const initialState: State = {
//   isAuth: false,
//   cognitoState: null,
//   ddsState: null,
//   pincode: localStorage.getItem(environment.pincodeName),
//   resetUser: false
// };

// const authReducer = createReducer(
//   initialState,
//   on(AuthAction.cognitoSuccess,
//     (state: State, action: CognitoStateModel) => ({...state, cognitoState: action})),
//   on(AuthAction.signInSuccess,
//     (state: State, action: { payload: SignInModelResponse }) => ({...state, isAuth: true, ddsState: action.payload})),
//   on(AuthAction.savePincode,
//     (state: State, payload) => ({...state, pincode: payload.pincode})),
//   on(AuthAction.signInPincode, (state: State) => ({...state, isAuth: true})),
//   on(AuthAction.signOut, () => ({...initialState, pincode: localStorage.getItem(environment.pincodeName)})),
//   on(AuthAction.resetPincodeState, state => ({...state, pincode: null})),
//   on(AuthAction.resetUser, state => ({...state, resetUser: true}))
// );

// export function reducer(state: State | undefined, action: Action) {
//   return authReducer(state, action);
// }
