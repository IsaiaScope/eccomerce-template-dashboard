import { SvgIcon } from '../svg/svg-icon/svg-icon-model';

export interface FormInput {
  type?: string;
  placeholder: string;
  formControlName: string;
  formGroupName: string;
  frontIcon?: SvgIcon;
  insideIcon?: SvgIcon;
}

export const formInputDefault: FormInput = {
  type: 'text',
  placeholder: '',
  formControlName: '',
  formGroupName: '',
};
