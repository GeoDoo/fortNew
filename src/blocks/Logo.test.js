import React from 'react';
import { shallow, mount } from 'enzyme';
import Logo from './Logo';

describe('<Logo />', () => {
  it('should render without crashing', () => {
    shallow(<Logo />);
  });

  describe('should contain necessary components', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(<Logo />);
    });

    it('should have an image', () => {
      expect(wrapper.find('img').length).toBe(1);
    });
  });
});
