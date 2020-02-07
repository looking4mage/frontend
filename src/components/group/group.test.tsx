import { shallow } from 'enzyme';
import React from 'react';
import { Group } from './group';

describe(Group, () => {
  it('should parse component correctly', () => {
    const markup = shallow(<Group />);
    expect(markup.html()).toContain('c-group');
  });
});
