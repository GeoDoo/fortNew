import React from 'react';
import Logo from './Logo';
import { createMenu } from '../adapters/menu';
import menuData from '../assets/text/menus.json';

const Header = () => (
  <div>
    <Logo />
    {createMenu(menuData.main)}
  </div>
);

export default Header;
