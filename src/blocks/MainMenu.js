import React from 'react';
import { createMenu } from '../adapters/menu';
import { main } from '../assets/text/menus.json';
import './MainMenu.css';

const MainMenu = ({ isVisible }) => (
  <div id="main-menu" className={isVisible ? '' : 'hidden'}>
    {createMenu(main)}
  </div>
);

export default MainMenu;
