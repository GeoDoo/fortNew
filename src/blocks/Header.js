import React, { Component } from 'react';
import Logo from './Logo';
import { createMenu } from '../adapters/menu';
import { main } from '../assets/text/menus.json';
import BurgerMenu from '../elements/BurgerMenu';
import './Header.css';

class Header extends Component {
  state = {
    isMenuVisible: false
  };

  onClick = () => {
    const { isMenuVisible } = this.state;
    this.setState({
      isMenuVisible: !isMenuVisible
    });
  };

  render() {
    const { isMenuVisible } = this.state;
    return (
      <header id="header">
        <Logo />
        <div id="main-menu" className={isMenuVisible ? '' : 'hidden'}>
          {createMenu(main)}
        </div>
        <BurgerMenu onClick={this.onClick} animate={isMenuVisible} />
      </header>
    );
  }
}

export default Header;
