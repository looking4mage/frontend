import React, { ReactElement, useState } from 'react';

import { CustomLink } from '../../utils/helpers';
import './register.scss';

interface IRegisterFormState {
  readonly email: string;
  readonly password: string;
}

export function Register(): ReactElement {
  const [form, setState] = useState<IRegisterFormState>({
    email: '',
    password: '',
  });

  const updateField = (event: React.ChangeEvent<HTMLInputElement>): boolean => {
    setState({
      ...form,
      [event.target.name]: event.target.value,
    });

    return false;
  };

  return (
    <div className="c-register">
      <h2 className="c-register__header">Register</h2>
      <form className="c-register__form">
        <label>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={updateField}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={updateField}
          />
        </label>
        <button type="button">Create account</button>
        <p className="c-register__login">
          <span>
            Or
            <CustomLink href="/login" className="c-register__login--link">
              login
            </CustomLink>
          </span>
        </p>
      </form>
    </div>
  );
}
