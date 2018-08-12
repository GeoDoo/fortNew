import React, { Component } from 'react';
import MainMenu from './MainMenu';
import BurgerMenu from '../elements/BurgerMenu';

class Navigation extends Component {
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
      <div id="navigation">
        <MainMenu isVisible={isMenuVisible} />
        <BurgerMenu onClick={this.onClick} animate={isMenuVisible} />
      </div>
    );
  }
}

export default Navigation;
