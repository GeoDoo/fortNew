import React from 'react';
import './BurgerMenu.css';

const BurgerMenu = ({ onClick, animate }) => (
  <div className={animate ? 'burger animate' : 'burger'} onClick={onClick}>
    <span />
    <span />
    <span />
  </div>
);

export default BurgerMenu;
