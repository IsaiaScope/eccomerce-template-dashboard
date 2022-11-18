export interface FormCheckBox {
  formControlName: string;
  formGroupName: string;
  label: string;
  wrapperClasses?: string[]

}

export const FormCheckBoxDefault: FormCheckBox = {
  formControlName: '',
  formGroupName: '',
  label: '',
};
