import { createAction, props } from '@ngrx/store';

export const signIn = createAction(
  '[Auth] signIn',
  props<{ email: string; password: string }>()
);

export const signInSuccess = createAction(
  '[Auth] signIn Success',
  props<{ accessToken: string }>()
);

export const refreshToken = createAction('[Auth] refreshToken');

export const refreshTokenSuccess = createAction(
  '[Auth] signIn Success',
  props<{ accessToken: string }>()
);

// export const signInFailure = createAction(
//   '[Auth] signIn  Failure',
//   props<{ error }>()
// );

// export const cognitoSuccess = createAction(
//   '[Auth] cognito signIn success',
//   props<CognitoStateModel>()
// );

// export const savePincode = createAction(
//   '[Auth] save PIN code',
//   props<{ pincode: string }>()
// );

// export const signInPincode = createAction(
//   '[Auth] sign in PIN code'
// );

// export const signOut = createAction(
//   '[Auth] sign out'
// );

// export const resetPincodeLocalStorage = createAction(
//   '[Auth] Reset PIN code - local storage'
// );

// export const resetPincodeState = createAction(
//   '[Auth] Reset PIN code - State'
// );
// export const navigateToPincode = createAction(
//   '[Auth] Reset PIN code - go to pincode page'
// );
// export const resetUser = createAction(
//   '[Auth] Reset User'
// );
