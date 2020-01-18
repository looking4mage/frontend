import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router';
import { MainUnauthorized } from '../main-unauthorized';
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
});
