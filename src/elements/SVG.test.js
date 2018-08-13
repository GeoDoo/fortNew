import React from 'react';
import { shallow, mount } from 'enzyme';
import SVG from './SVG';

describe('SVG', () => {
  it('should render without crashing', () => {
    shallow(<SVG src="test.svg" />);
  });

  describe('components', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(<SVG src="test.svg" />);
    });

    it('should contain an image', () => {
      expect(wrapper.find('img').length).toBe(1);
    });
  });

  describe('behavior', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(<SVG src="test.svg" />);
    });

    it('should check if provided image is a vector icon', () => {
      expect(wrapper.props().src.includes('svg')).toBe(true);
    });

    it('should throw if provided image is not a vector icon', () => {
      expect(() =>
        wrapper.setProps({
          src: 'test.png'
        })
      ).toThrowError(Error);
    });
  });
});
