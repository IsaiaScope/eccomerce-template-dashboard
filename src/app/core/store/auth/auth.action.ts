import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Auth] login',
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth] login Success',
  props<{ accessToken: string }>()
);

export const refreshToken = createAction('[Auth] refreshToken');

export const refreshTokenSuccess = createAction(
  '[Auth] refreshToken Success',
  props<{ accessToken: string }>()
);

export const logout = createAction('[Auth] logout');

export const logoutSuccess = createAction('[Auth] logout Success');

export const authError = createAction(
  '[Auth] Error',
  props<{ err: HttpErrorResponse }>()
);
