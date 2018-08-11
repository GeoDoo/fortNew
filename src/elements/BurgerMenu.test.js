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

    it('should have a logo', () => {
      expect(wrapper.text()).toBe('Menu');
    });
  });

  describe('behavior', () => {
    let wrapper;
    let clickSpy;
    beforeEach(() => {
      clickSpy = jest.fn();
      wrapper = mount(<BurgerMenu showMenu={clickSpy} />);
    });

    it('should open the menu when clicked', () => {
      expect(clickSpy).toHaveBeenCalled;
    });
  });
});
