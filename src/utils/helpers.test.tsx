import { mount } from 'enzyme';
import React from 'react';
import { CustomLink } from './helpers';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe(CustomLink, () => {
  it('should check if redirected to login', () => {
    const wrapper = mount(
      <CustomLink href="test" className="test">
        Test
      </CustomLink>,
    );
    const redirect = wrapper.find('a');
    expect(redirect).toHaveLength(1);
    redirect.simulate('click');
    expect(mockHistoryPush).toHaveBeenCalledWith('test');
  });
});
