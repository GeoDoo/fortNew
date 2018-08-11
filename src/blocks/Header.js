import React from 'react';
import Logo from './Logo';
import { createMenu } from '../adapters/menu';
import { main } from '../assets/text/menus.json';
import './Header.css';

const Header = () => (
  <div id="header">
    <Logo />
    {createMenu(main)}
  </div>
);

export default Header;
