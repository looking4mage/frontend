import { mount } from 'enzyme';
import React from 'react';

import { MainUnauthorized } from './main-unauthorized';
import { MemoryRouter } from 'react-router';

describe(MainUnauthorized, () => {
  it('should parse component correctly', () => {
    const wrapper = mount(
      <MemoryRouter>
        <MainUnauthorized />
      </MemoryRouter>,
    );
    expect(wrapper.html()).toContain('c-main-unauthorized');
  });
});
