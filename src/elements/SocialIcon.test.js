import React from 'react';
import { shallow, mount } from 'enzyme';
import SocialIcon from './SocialIcon';

describe('SocialIcon', () => {
  it('should render without crashing', () => {
    shallow(<SocialIcon icon="test.svg" />);
  });

  describe('components', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(<SocialIcon icon="test.svg" />);
    });

    it('should have a link to external social platform', () => {
      expect(wrapper.find('ExternalLink').length).toBe(1);
    });

    it('should have an icon', () => {
      expect(wrapper.find('img').length).toBe(1);
    });
  });
});
