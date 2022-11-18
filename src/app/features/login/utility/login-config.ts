import { Validators } from '@angular/forms';
import { LS_VALUES } from 'src/app/core/services/local-storage/local-storage-config';
import { FormCheckBox } from 'src/app/shared/components/form-checkbox/form-checkbox-model';
import { FormInput } from 'src/app/shared/components/form-input/form-input-model';
import { ImgWrapper } from 'src/app/shared/components/img-wrapper/img-wrapper-config';
import { REGEXP } from 'src/app/shared/constants/regex';
import { LocalStorageService as LS } from '../../../core/services/local-storage/local-storage.service';

export interface LoginForm {
  email: string;
  password: string;
  persistent: boolean;
}

const formField = {
  email: ['iso_on_fire@hotmail.com', [Validators.required, Validators.email]],
  password: [
    'Test1234@',
    [Validators.required, Validators.pattern(REGEXP.password)],
  ],
  persistent: [LS.get(LS_VALUES.persistent) || false],
};

const formStructure: {
  inputs: FormInput[];
  checkBoxes: FormCheckBox[];
} = {
  inputs: [
    {
      type: 'email',
      placeholder: 'email',
      formGroupName: 'data',
      formControlName: 'email',
      wrapperClasses: ['m-bottom-beta'],
      frontIcon: {
        name: 'email',
        wrapperClasses: ['svg-wrapper-form'],
      },
    },
    {
      type: 'password',
      placeholder: 'password',
      formGroupName: 'data',
      formControlName: 'password',
      wrapperClasses: ['p-relative', 'm-bottom-beta'],
      frontIcon: {
        name: 'password',
        wrapperClasses: ['svg-wrapper-form'],
      },
      insideIcon: {
        name: 'visibility_off',
      },
    },
  ],
  checkBoxes: [
    {
      formControlName: 'persistent',
      formGroupName: 'data',
      label: 'remember me',
      wrapperClasses: ['m-bottom-beta'],
    },
  ],
};

const formImg: ImgWrapper = {
  name: 'chopper',
  wrapperClasses: ['wrapper-dim-alpha', 'wrapper-circle', 'wrapper-half-way'],
};

export const loginConfig = {
  formField,
  formStructure,
  formImg,
};
