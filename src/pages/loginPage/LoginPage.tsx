import React, { useState } from 'react';
import styles from './loginPage.module.css';
import { Input } from 'common/fields';
import { Button } from 'common/buttons';


const validateIsEmpty = (value: string) => {
  if (!value) return 'field required';
  return null;
}
const validateUserName = (value: string) => {
  return validateIsEmpty(value);
};

const validatePassword = (value: string) => {
  return validateIsEmpty(value);
};

const loginFormValidateSchema = {
  username: validateUserName,
  password: validatePassword
};

const validateLoginForm = (name: keyof typeof loginFormValidateSchema, value: string) => {
  return loginFormValidateSchema[name](value);
}


interface FormErrors {
  username: string | null;
  password: string | null;
}

export const LoginPage = () => {

  const [formValues, setFormValues] = useState({ username: '', password: '' });
  const [formErrors, setFormErrors] = useState<FormErrors>({ username: null, password: null });

  return (
    <div className={styles.loginPage}>
      <div className={styles.container}>
        <div className={styles.headerText}>
          DOGGEE
        </div>
        <form className={styles.form}>
          <div className={styles.inputForm}>
            <Input
              className={styles.input}
              value={formValues.username}
              type='text'
              placeholder='Username'
              name='username'
              onChange={(event) => {
                const username = event.currentTarget.value;
                setFormValues({ ...formValues, username });

                const error = validateLoginForm('username', username);
                setFormErrors({ ...formErrors, username: error });
              }}
              {...(!!formErrors.username && {
                isError: !!formErrors.username,
                helperText: formErrors.username
              })}
            />
          </div>
          <div className={styles.inputForm}>
            <Input
              className={styles.input}
              value={formValues.password}
              placeholder='password'
              type='password'
              name='password'
              onChange={(event) => {
                const password = event.currentTarget.value;
                setFormValues({ ...formValues, password });

                const error = validateLoginForm('password', password);
                setFormErrors({ ...formErrors, password: error });
              }}
              {...(!!formErrors.password && {
                isError: !!formErrors.password,
                helperText: formErrors.password
              })}
            />
          </div>
          <div>
            <input type="checkbox" />
          </div>
          <Button className={styles.loginButton}>Sign In</Button>
        </form>
        <div className={styles.SignupContainer}>
          <a href="#">Create new account</a>
        </div>
      </div>
    </div>
  );
};
