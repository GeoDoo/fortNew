import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './regions/Header';
import Logo from './blocks/Logo';
import Navigation from './blocks/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './regions/Footer';
import Main from './regions/Main';
import Copyright from './blocks/Copyright';

const App = () => (
  <div className="container">
    <Header>
      <Logo />
      <Navigation />
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
  </div>
);

export default App;

// Future pages

// <Route path="/lyseis" component={Solutions} />
// <Route path="/synergasies" component={Partnerships} />
// <Route path="/blog" component={Blog} />
// <Route path="/epikoinonia" component={Contact} />

// Slogan

// Your security, our specialty
