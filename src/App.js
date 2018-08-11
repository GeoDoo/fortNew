import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './blocks/Header';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './regions/Footer';
import Copyright from './blocks/Copyright';

const App = () => (
  <div className="container">
    <Header />
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router>
    <Footer>
      <Copyright />
    </Footer>
  </div>
);

export default App;
