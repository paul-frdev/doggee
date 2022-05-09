import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import styles from './button.module.css';
import cn from 'classnames';

interface ButtonProps extends DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  children: ReactNode
}

export const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={cn(styles.button, className)} {...props}>
      {children}
    </button>
  );
};