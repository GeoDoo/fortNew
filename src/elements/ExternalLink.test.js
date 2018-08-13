import React from 'react';
import { shallow, mount } from 'enzyme';
import ExternalLink from './ExternalLink';

describe('ExternalLink', () => {
  it('should render without crashing', () => {
    shallow(<ExternalLink />);
  });

  describe('components', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(<ExternalLink />);
    });

    it('should have a link to external social platform', () => {
      expect(wrapper.find('a').length).toBe(1);
      expect(wrapper.find('a').props().target).toBe('_blank');
    });
  });
});
