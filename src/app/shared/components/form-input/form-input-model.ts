export interface FormInput {
  type?: string;
  placeholder: string;
  formControlName: string;
  formGroupName: string;
}

export const formInputDefault: FormInput = {
  type: 'text',
  placeholder: '',
  formControlName: '',
  formGroupName: '',
};
