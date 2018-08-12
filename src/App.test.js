import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('App', () => {
  it('should render without crashing', () => {
    shallow(<App />);
  });

  describe('components', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(<App />);
    });

    it('should have a BurgerMenu', () => {
      expect(wrapper.find('BurgerMenu').length).toBe(1);
    });

    it('should have a MainMenu', () => {
      expect(wrapper.find('MainMenu').length).toBe(1);
    });
  });

  describe('behavior', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(<App />);
    });

    it('should toggle MainMenu when BurgerMenu is clicked', () => {
      wrapper.find('BurgerMenu').simulate('click');
      expect(wrapper.state().isDrawerOpen).toBe(true);

      wrapper.find('BurgerMenu').simulate('click');
      expect(wrapper.state().isDrawerOpen).toBe(false);

      wrapper.find('BurgerMenu').simulate('click');
      expect(wrapper.state().isDrawerOpen).toBe(true);
    });
  });
});
