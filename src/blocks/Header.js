import React, { Component } from 'react';
import Logo from './Logo';
import MainMenu from './MainMenu';
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
        <MainMenu isVisible={isMenuVisible} />
        <BurgerMenu onClick={this.onClick} animate={isMenuVisible} />
      </header>
    );
  }
}

export default Header;
