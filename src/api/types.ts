export interface IForm {
  name: string;
  fields: IFormField[];
  buttons: IFormButton[];
}

export interface IFormField {
  label: string;
  input: IFormInputElement;
}

export interface IFormInputElement {
  type: string;
  required?: boolean;
  placeholder?: string;
  mask?: string;
  multiple?: boolean;
  filetype?: string[];
}

export interface IFormButton {
  text: string;
  type: string;
}
