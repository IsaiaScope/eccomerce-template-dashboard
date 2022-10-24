export interface FormInput {
  type?: string;
  placeholder: string;
  formControlName: string;
  formGroupName: string;
  frontIcon?: string;
  insideIcon?: string;
}

export const formInputDefault: FormInput = {
  type: 'text',
  placeholder: '',
  formControlName: '',
  formGroupName: '',
  frontIcon: '',
  insideIcon: '',
};
