import React, { useState } from 'react';
import styles from './checkbox.module.css';
import cn from 'classnames';
import { CheckboxProps } from 'common/fields/fields';
import { ReactComponent as CheckMark } from 'assets/checkmark.svg';


export const Checkbox: React.FC<CheckboxProps> = ({ label, checked, ...props }) => {

  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className={styles.checkboxContainer}>
      <label className={styles.label}>
        <input
          checked={checked}
          className={styles.checkbox}
          type="checkbox"
          {...props}
          onChange={() => {
            setIsChecked(!isChecked);
          }}
        />
        <span
          className={cn(styles.checkboxCustom, {
            [styles.checkboxCustomActive]: isChecked
          })}
          aria-hidden="true"
        />
        {label}
      </label>
    </div>
  );
};
