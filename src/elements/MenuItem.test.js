import React from 'react';
import { shallow, mount } from 'enzyme';
import MenuItem from './MenuItem';

describe('MenuItem', () => {
  it('should render without crashing', () => {
    shallow(<MenuItem />);
  });
});
