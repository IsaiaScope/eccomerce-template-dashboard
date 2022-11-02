import { SvgData } from '../svg/svg-model';

export interface FormInput {
  type?: string;
  placeholder: string;
  formControlName: string;
  formGroupName: string;
  frontIcon?: SvgData;
  insideIcon?: SvgData;
}

export const formInputDefault: FormInput = {
  type: 'text',
  placeholder: '',
  formControlName: '',
  formGroupName: '',
};
