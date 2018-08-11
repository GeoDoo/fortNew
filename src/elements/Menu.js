import React from 'react';
import './Menu.css';

const Menu = ({ children }) => (
  <nav className="nav">
    <ul className="menu">{children}</ul>
  </nav>
);

export default Menu;
