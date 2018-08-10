import React from 'react';
import Menu from '../elements/Menu';
import MenuItem from '../elements/MenuItem';
import { createMenu } from './menu';

describe('createMenu', () => {
  const data = ['One', 'Two', 'Three'];
  it('should create a menu item list', () => {
    expect(createMenu(data)).toEqual(
      <Menu>
        <MenuItem key="One" text="One" />
        <MenuItem key="Two" text="Two" />
        <MenuItem key="Three" text="Three" />
      </Menu>
    );
  });
});
