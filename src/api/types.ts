export interface IForm {
  name: string;
  fields: IFormField[];
}

export type InputTypeValue = string | number | boolean;

export interface IFormField {
  label: string;
  tabIndex?: number;
  name: string;
  input: IFormInputElement;
}

export interface IFormInputElement {
  type: string;
  required?: boolean;
  placeholder?: string;
  mask?: string;
  multiple?: boolean;
  filetype?: string[];
  initialValue?: InputTypeValue;
}

export interface IFormButton {
  tabIndex?: number;
  text: string;
  type: string;
}
