import React from 'react';
import Menu from '../elements/Menu';
import logo from '../assets/fort.png';

const Header = () => (
  <div>
    <img id="logo" src={logo} />
    <Menu />
  </div>
);

export default Header;
