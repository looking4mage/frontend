import React, { ReactElement, useState } from 'react';
import { CustomLink } from '../../utils/helpers';

import './login.scss';

export interface ILoginFormState {
  readonly email: string;
  readonly password: string;
}

export function Login(): ReactElement {
  const [form, setState] = useState<ILoginFormState>({
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
    <div className="c-login">
      <h2 className="c-login__header">Login</h2>
      <form className="c-login__form">
        <label>
          Email
          <input
            type="text"
            name="email"
            id="email"
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
        <button type="button">Sign in</button>
        <p className="c-login__register">
          <span>
            Or
            <CustomLink href="/register" className="c-login__register--link">
              register
            </CustomLink>
          </span>
        </p>
      </form>
    </div>
  );
}
