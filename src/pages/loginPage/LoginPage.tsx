import React, { useState } from 'react';
import styles from './loginPage.module.css';
import { Input } from 'common/fields';
import { Button } from 'common/buttons';

export const LoginPage = () => {

  const [formValues, setFormValues] = useState({ username: '', password: '' });

  console.log(formValues);

  return (
    <div className={styles.loginPage}>
      <div className={styles.container}>
        <div>Header</div>
        <form className={styles.form}>
          <div className={styles.inputForm}>
            <Input
              className={styles.input}
              isError={true}
              helperText={`Validation`}
              value={formValues.username}
              type='text'
              placeholder='Username'
              name='username'
              onChange={(event) => setFormValues({ ...formValues, username: event.currentTarget.value })}
            />
          </div>
          <div className={styles.inputForm}>
            <Input
              className={styles.input}
              value={formValues.password}
              placeholder='password'
              type='password'
              name='password'
              onChange={(event) => setFormValues({ ...formValues, password: event.currentTarget.value })}
            />
          </div>
          <div>
            <input type="checkbox" />
          </div>
          <Button className={styles.loginButton}>Sign In</Button>
        </form>
        <div></div>
      </div>
    </div>
  );
};
