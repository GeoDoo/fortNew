import React from 'react';
import { shallow } from 'enzyme';
import MenuItem from './MenuItem';

describe('MenuItem', () => {
  it('should render without crashing', () => {
    shallow(<MenuItem />);
  });
});
