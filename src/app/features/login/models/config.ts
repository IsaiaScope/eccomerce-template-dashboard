import { Validators } from '@angular/forms';
import { FormCheckBox } from 'src/app/shared/components/form-checkbox/form-checkbox-model';
import { FormInput } from 'src/app/shared/components/form-input/form-input-model';
import { REGEXP } from 'src/app/shared/constants/regex';

export interface LoginForm {
  email: string;
  password: string;
  persistent: boolean;
}

export const configLoginForm = {
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.pattern(REGEXP.password)]],
  persistent: [false],
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
      frontIcon: 'email',
    },
    {
      placeholder: 'password',
      formGroupName: 'data',
      formControlName: 'password',
      frontIcon: 'password',
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
