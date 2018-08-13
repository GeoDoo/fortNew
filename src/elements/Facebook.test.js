import React from 'react';
import { shallow, mount } from 'enzyme';
import Facebook from './Facebook';

describe('Facebook', () => {
  it('should render without crashing', () => {
    shallow(<Facebook />);
  });

  describe('components', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(<Facebook />);
    });

    it('should contain a SocialIcon', () => {
      expect(wrapper.find('SocialIcon').length).toBe(1);
    });
  });
});
