import React, {useRef, useState } from 'react';
import styles from '../input/input.module.css';
import cn from 'classnames';
import { ReactComponent as EyeOpen } from 'assets/eye-open.svg';
import { ReactComponent as EyeClose } from 'assets/eye-close.svg';
import { InputProps } from '../../fields';

export const PasswordInput: React.FC<InputProps> = ({ isError = false, label, className, helperText, ...props }) => {

  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocus, setFocus] = useState(!!props.value ?? false);
  const [showPassword, setShowPassword] = useState(false);
  const ShowPasswordToggle = props.value;
  
  return (
    <div
      className={styles.inputContainer}
      onClick={() => { inputRef.current?.focus(), setFocus(true) }}
    >
      <label
        htmlFor=""
        className={cn(styles.inputLabel, {
          [styles.focused]: isFocus
        })}>{label}</label>
      <input
        type={ShowPasswordToggle && showPassword ? 'text' : 'password'}
        {...props}
        onBlur={() => !props.value && setFocus(false)}
        className={cn(styles.baseInput, className, {
          [styles.error]: isError
        })}
      />
      {isError && helperText && <span className={styles.helperText}>{helperText}</span>}
      {ShowPasswordToggle &&
        <span
          className={styles.passwordToggleContainer}
          onClick={() => setShowPassword(!showPassword)}
        >{showPassword ? <EyeClose style={{ height: '22px' }} /> : <EyeOpen style={{ height: '22px' }} />}</span>}
    </div>
  );
};
