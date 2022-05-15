export interface InputProps extends Omit<HTMLProps<HTMLInputElement>, "type"> {
  isError?: boolean;
  helperText?: string;
  label: string;
}


export interface CheckboxProps extends Omit<HTMLProps<HTMLInputElement>, "type"> {
  isError?: boolean;
  helperText?: string;
  label: string;
}
