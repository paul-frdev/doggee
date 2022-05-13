import React, { HTMLProps, useState } from 'react';
import styles from '../input/input.module.css';
import cn from 'classnames';
import { ReactComponent as EyeOpen } from 'assets/eye-open.svg';
import { ReactComponent as EyeClose } from 'assets/eye-close.svg';

interface InputProps extends Omit<HTMLProps<HTMLInputElement>, 'type'> {
  isError?: boolean;
  helperText?: string;
}
export const PasswordInput: React.FC<InputProps> = ({ isError = false, className, helperText, ...props }) => {


  const [showPassword, setShowPassword] = useState(false);
  const ShowPasswordToggle = props.value;
  return (
    <div className={styles.inputContainer}>
      <input
        type={ShowPasswordToggle && showPassword ? 'text' : 'password'}
        {...props}
        className={cn(styles.baseInput, className, {
          [styles.error]: isError
        })}
      />
      {isError && helperText && <span className={styles.helperText}>{helperText}</span>}
      {ShowPasswordToggle &&
        <span
          className={styles.passwordToggleContainer}
          onClick={() => setShowPassword(!showPassword)}
        >{showPassword ? <EyeClose style={{height: '22px'}}/> : <EyeOpen style={{height: '22px'}}/> }</span>}
    </div>
  );
};
