import React from 'react';
import { shallow, mount } from 'enzyme';
import Navigation from './Navigation';

describe('Navigation', () => {
  it('should render without crashing', () => {
    shallow(<Navigation />);
  });

  describe('components', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(<Navigation />);
    });

    it('should have a BurgerMenu', () => {
      expect(wrapper.find('BurgerMenu').length).toBe(1);
    });

    it('should have a MainMenu', () => {
      expect(wrapper.find('MainMenu').length).toBe(1);
    });
  });

  describe('components', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(<Navigation />);
    });

    it('should toggle MainMenu when BurgerMenu is clicked', () => {
      wrapper.find('BurgerMenu').simulate('click');
      expect(wrapper.state().isMenuVisible).toBe(true);

      wrapper.find('BurgerMenu').simulate('click');
      expect(wrapper.state().isMenuVisible).toBe(false);

      wrapper.find('BurgerMenu').simulate('click');
      expect(wrapper.state().isMenuVisible).toBe(true);
    });
  });
});
