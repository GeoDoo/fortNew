import React from 'react';
import Menu from '../elements/Menu';
import MenuItem from '../elements/MenuItem';

export const createMenu = data => {
  return (
    <Menu>
      {data.map(item => (
        <MenuItem key={item.link} text={item.text} href={item.link} />
      ))}
    </Menu>
  );
};
