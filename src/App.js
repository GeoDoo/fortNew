import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './regions/Header';
import Logo from './blocks/Logo';
import BurgerMenu from './elements/BurgerMenu';
import Main from './regions/Main';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './regions/Footer';
import Copyright from './blocks/Copyright';
import Drawer from './regions/Drawer';
import MainMenu from './blocks/MainMenu';

class App extends Component {
  state = {
    isDrawerOpen: false
  };

  onClick = () => {
    const { isDrawerOpen } = this.state;
    this.setState({
      isDrawerOpen: !isDrawerOpen
    });
  };

  render() {
    const { isDrawerOpen } = this.state;

    return (
      <div className="page">
        <Header>
          <Logo />
          <BurgerMenu onClick={this.onClick} animate={isDrawerOpen} />
        </Header>
        <Router>
          <Main>
            <Route exact path="/" component={Home} />
            <Route path="/i-etairia" component={About} />
          </Main>
        </Router>
        <Footer>
          <Copyright />
        </Footer>
        <Drawer isOpen={isDrawerOpen}>
          <MainMenu />
        </Drawer>
      </div>
    );
  }
}

export default App;

// Future pages

// <Route path="/lyseis" component={Solutions} />
// <Route path="/synergasies" component={Partnerships} />
// <Route path="/blog" component={Blog} />
// <Route path="/epikoinonia" component={Contact} />

// Slogan

// Your security, our specialty
