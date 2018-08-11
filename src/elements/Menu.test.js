import React from 'react';
import { shallow, mount } from 'enzyme';
import Menu from './Menu';

describe('Menu', () => {
  it('should render without crashing', () => {
    shallow(<Menu />);
  });
});
