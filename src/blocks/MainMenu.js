import React from 'react';
import { createMenu } from '../adapters/menu';
import { main } from '../assets/text/menus.json';

const MainMenu = ({ isVisible }) => (
  <div id="main-menu" className={isVisible ? '' : 'hidden'}>
    {createMenu(main)}
  </div>
);

export default MainMenu;
