import React from 'react';
import { createMenu } from '../adapters/menu';
import { main } from '../assets/text/menus.json';
import './MainMenu.css';

const MainMenu = () => <div id="main-menu">{createMenu(main)}</div>;

export default MainMenu;
