import React from 'react';
import { shallow, mount } from 'enzyme';
import MainMenu from './MainMenu';

describe('MainMenu', () => {
  it('should render without crashing', () => {
    shallow(<MainMenu />);
  });

  describe('components', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(<MainMenu />);
    });

    it('should contain a Menu', () => {
      expect(wrapper.find('Menu').length).toBe(1);
    });

    it('should have at least one MenuItem', () => {
      expect(wrapper.find('MenuItem').length).toBeGreaterThan(0);
    });
  });
});
