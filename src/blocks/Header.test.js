import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';

describe('<Header />', () => {
  it('should render without crashing', () => {
    shallow(<Header />);
  });

  describe('should contain necessary components', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(<Header />);
    });

    it('should have a logo', () => {
      expect(wrapper.find('#logo').length).toBe(1);
    });

    it('should have a menu', () => {
      expect(wrapper.find('Menu').length).toBe(1);
    });
  });
});
