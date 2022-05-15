import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import styles from './button.module.css';
import cn from 'classnames';

interface ButtonProps extends DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  children: ReactNode;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, isLoading = false, className, ...props }) => {
  return (
    <button className={cn(styles.button, className)} {...props}>
      {!isLoading && children}
      {isLoading &&
      <div className={styles.dotFlashing}/>
      }
    </button>
  );
};