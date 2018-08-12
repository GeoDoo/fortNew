import React from 'react';
import { shallow, mount } from 'enzyme';
import Welcome from './Welcome';

describe('Welcome', () => {
  it('should render without crashing', () => {
    shallow(<Welcome />);
  });

  describe('components', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(<Welcome />);
    });

    it('should have a heading', () => {
      expect(wrapper.find('h1').length).toBe(1);
    });

    it('should have at least one paragraph', () => {
      expect(wrapper.find('p').length).toBeGreaterThan(0);
    });

    it('should have a more link', () => {
      expect(wrapper.find('a.more').length).toBe(1);
    });
  });
});
