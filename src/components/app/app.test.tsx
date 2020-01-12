import {shallow} from 'enzyme';
import React from 'react';

import {App} from './app';

describe(App, () => {
  it('should parse component correctly', () => {
    const markup = shallow(<App/>);
    expect(markup.html()).toContain('app');
    expect(markup.find('h1').html()).toContain('App');
  });
});
