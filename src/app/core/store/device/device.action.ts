import { createAction, props } from '@ngrx/store';
import { IBrowser, IOS, IDevice } from 'ua-parser-js';

export const saveUAInfo = createAction(
  '[Device] Save UA Informations',
  props<{ browser: IBrowser; os: IOS; device: IDevice }>()
);
