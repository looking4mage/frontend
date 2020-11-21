import { mount } from 'enzyme';
import React from 'react';
import { Header } from './header';
import { MemoryRouter } from 'react-router';

describe(Header, () => {
  it('should parse component correctly', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    expect(wrapper.html()).toContain('c-header');
  });
});
