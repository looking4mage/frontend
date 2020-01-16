import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router';
import { Login } from './login';

describe(Login, () => {
  it('Login loads with initial state with empty strings', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
    );
    expect(wrapper.find('input')).toHaveLength(2);
    expect(
      wrapper
        .find('input')
        .at(0)
        .props().value,
    ).toEqual('');
    expect(
      wrapper
        .find('input')
        .at(1)
        .props().value,
    ).toEqual('');
  });

  it('Should capture state correctly onChange', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
    );

    wrapper
      .find('input')
      .at(0)
      .simulate('change', { target: { name: 'email', value: 'test' } });
    expect(
      wrapper
        .find('input')
        .at(0)
        .prop('value'),
    ).toEqual('test');
  });
});
