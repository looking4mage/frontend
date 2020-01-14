import { shallow } from 'enzyme';
import React from 'react';

import { MainUnauthorized } from './main-unauthorized';

describe(MainUnauthorized, () => {
  it('should parse component correctly', () => {
    const markup = shallow(<MainUnauthorized/>);
    expect(markup.html()).toContain('c-main-unauthorized');
  });
});
