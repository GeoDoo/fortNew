import React from 'react';
import { shallow } from 'enzyme';
import createCopyright from './copyright';

describe('createCopyright', () => {
  it('should contain copyright text and author link', () => {
    const data = {
      beginning: 'Copyright',
      ascii: '©',
      startYear: '2013',
      author: 'geodoo',
      ending: '- All rights reserved.'
    };
    const wrapper = shallow(createCopyright(data));
    const currentYear = new Date().getFullYear();

    expect(wrapper.text().includes('Copyright')).toBe(true);
    expect(wrapper.text().includes('©')).toBe(true);
    expect(wrapper.text().includes(`2013-${currentYear}`)).toBe(true);
    expect(wrapper.find('a').length).toBe(1);
    expect(
      wrapper
        .find('a')
        .text()
        .includes('geodoo')
    ).toBe(true);
    expect(wrapper.text().includes('All rights reserved')).toBe(true);
  });
});
