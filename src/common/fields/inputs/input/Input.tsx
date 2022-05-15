import React, {useRef, useState } from 'react';
import styles from './input.module.css';
import cn from 'classnames';
import { InputProps } from '../../fields';

export const Input: React.FC<InputProps> = ({ isError = false, label, className, helperText, ...props }) => {

  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocus, setFocus] = useState(!!props.value ?? false);

  return (
    <div className={styles.inputContainer} onClick={() => { inputRef.current?.focus(), setFocus(true) }}>
      <label
        htmlFor=""
        className={cn(styles.inputLabel, {
          [styles.focused]: isFocus
        })}>{label}</label>
      <input
        onBlur={() => !props.value && setFocus(false)}
        type='type'
        {...props}
        className={cn(styles.baseInput, className, {
          [styles.error]: isError,
        })}
      />
      {isError && helperText && <span className={styles.helperText}>{helperText}</span>}
    </div>
  );
};
