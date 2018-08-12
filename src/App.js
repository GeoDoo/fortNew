import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './blocks/Header';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './regions/Footer';
import Main from './regions/Main';
import Copyright from './blocks/Copyright';

const App = () => (
  <div className="container">
    <Header />
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
