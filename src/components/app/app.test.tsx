import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router';
import { MainUnauthorized } from '../main-unauthorized';
import { Register } from '../register';
import { App } from './app';

describe(App, () => {
  it('check if main page for unauthorized users is loading', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );
    expect(wrapper.find(MainUnauthorized)).toHaveLength(1);
  });

  it('check if register page is loading', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/register']}>
        <App />
      </MemoryRouter>,
    );
    expect(wrapper.find(Register)).toHaveLength(0);
    expect(wrapper.find(MainUnauthorized)).toHaveLength(1);
  });
});
