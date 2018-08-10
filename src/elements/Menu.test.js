import React from 'react';
import { shallow, mount } from 'enzyme';
import Menu from './Menu';

describe('<Menu />', () => {
  it('should render without crashing', () => {
    shallow(<Menu />);
  });

  describe('should contain necessary components', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(<Menu />);
    });

    it('should have at least one menu item', () => {
      expect(wrapper.find('MenuItem').length).toBeGreaterThan(0);
    });
  });
});
