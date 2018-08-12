import React from 'react';
import { shallow } from 'enzyme';
import { createMenu } from './menu';

describe('createMenu', () => {
  const data = ['One', 'Two', 'Three'];
  it('should create a menu item list', () => {
    const wrapper = shallow(createMenu(data));
    expect(wrapper.find('MenuItem').length).toBe(3);
  });
});
