import React from 'react';
import './Header.css';

const Header = ({ children }) => (
  <header id="header">
    <div className="inner">{children}</div>
  </header>
);

export default Header;
