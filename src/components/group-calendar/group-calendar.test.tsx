import { shallow } from 'enzyme';
import React from 'react';
import { GroupCalendar } from './group-calendar';

describe(GroupCalendar, () => {
  it('should parse component correctly', () => {
    const markup = shallow(<GroupCalendar />);
    expect(markup.html()).toContain('c-group-calendar');
  });
});
