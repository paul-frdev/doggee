import React, { ChangeEvent, useState } from 'react';
import styles from './loginPage.module.css';
import { Checkbox, Input, PasswordInput } from 'common/fields';
import { Button } from 'common/buttons';
import { useNavigate } from 'react-router-dom';


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

const LoginPage = () => {

  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({ username: '', password: '', notMyComputer: false });
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
              label='username'
              type='text'
              name='username'
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
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
            <PasswordInput
              className={styles.input}
              value={formValues.password}
              label='password'
              name='password'
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
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
            <Checkbox
              label='This is not my device'
              checked={formValues.notMyComputer}
              onClick={(event: ChangeEvent<HTMLInputElement>) => {

                const notMyComputer = event.currentTarget.checked;
                setFormValues({ ...formValues, notMyComputer });
              }}
            />
          </div>
          <Button 
          disabled={!formValues.username || !formValues.password}
          isLoading={!formValues.username || !formValues.password}
          className={styles.loginButton}
          >Sign In</Button>
        </form>
        <div className={styles.SignupContainer} onClick={() => navigate('/registration')}>
          <span>
            Create new account
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;