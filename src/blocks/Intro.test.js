import React from 'react';
import { shallow, mount } from 'enzyme';
import Intro from './Intro';

describe('Intro', () => {
  it('should render without crashing', () => {
    shallow(<Intro />);
  });

  describe('components', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(<Intro />);
    });

    it('should contain at least two SVG', () => {
      expect(wrapper.find('SVG').length).toBeGreaterThan(1);
    });
  });
});
