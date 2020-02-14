import { shallow } from 'enzyme';
import React from 'react';
import { Message } from './message';

describe(Message, () => {
  it('should parse component correctly', () => {
    const markup = shallow(<Message />);
    expect(markup.html()).toContain('c-message');
  });
});
