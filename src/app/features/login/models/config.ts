import { Validators } from '@angular/forms';
import { FormInput } from 'src/app/shared/components/form-input/form-input-model';
import { REGEXP } from 'src/app/shared/constants/regex';

export const configLoginForm = {
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.pattern(REGEXP.password)]],
};

export const structureLoginForm: FormInput[] = [
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
];
