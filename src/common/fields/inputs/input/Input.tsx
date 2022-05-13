import React, { HTMLProps } from 'react';
import styles from './input.module.css';
import cn from 'classnames';

interface InputProps extends HTMLProps<HTMLInputElement> {
  isError?: boolean;
  helperText?: string;
}
export const Input: React.FC<InputProps> = ({ isError = false, className, helperText, ...props }) => {

  return (
    <div className={styles.inputContainer}>
      <input
        type='type'
        {...props}
        className={cn(styles.baseInput, className, {
          [styles.error]: isError
        })}
      />
      {isError && helperText && <span className={styles.helperText}>{helperText}</span>}
    </div>
  );
};
