import { mount } from 'enzyme';
import React from 'react';
import { Communities } from './communities';
import { MemoryRouter } from 'react-router';

describe(Communities, () => {
  it('should parse component correctly', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Communities />
      </MemoryRouter>,
    );
    expect(wrapper.html()).toContain('c-communities');
  });
});
