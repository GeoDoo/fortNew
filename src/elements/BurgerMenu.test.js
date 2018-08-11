import React from 'react';
import { shallow, mount } from 'enzyme';
import BurgerMenu from './BurgerMenu';

describe('BurgerMenu', () => {
  it('should render without crashing', () => {
    shallow(<BurgerMenu />);
  });

  describe('components', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(<BurgerMenu />);
    });

    it('should have a burger', () => {
      expect(wrapper.text()).toBe('Menu');
    });
  });
});
