import { Validators } from '@angular/forms';
import { LS_VALUES } from 'src/app/core/services/local-storage/local-storage-config';
import { FormCheckBox } from 'src/app/shared/components/form-checkbox/form-checkbox-model';
import { FormInput } from 'src/app/shared/components/form-input/form-input-model';
import { REGEXP } from 'src/app/shared/constants/regex';
import { LocalStorageService as LS } from '../../../core/services/local-storage/local-storage.service';

export interface LoginForm {
  email: string;
  password: string;
  persistent: boolean;
}

export const configLoginForm = {
  email: ['iso_on_fire@hotmail.com', [Validators.required, Validators.email]],
  password: [
    'Test1234@',
    [Validators.required, Validators.pattern(REGEXP.password)],
  ],
  persistent: [LS.get(LS_VALUES.persistent) || false],
};

export const structureLoginForm: {
  inputs: FormInput[];
  checkBoxes: FormCheckBox[];
} = {
  inputs: [
    {
      type: 'email',
      placeholder: 'email',
      formGroupName: 'data',
      formControlName: 'email',
      frontIcon: {
        name: 'email',
      },
    },
    {
      placeholder: 'password',
      formGroupName: 'data',
      formControlName: 'password',
      frontIcon: {
        name: 'password',
      },
    },
  ],
  checkBoxes: [
    {
      formControlName: 'persistent',
      formGroupName: 'data',
      label: 'remember me',
    },
  ],
};
