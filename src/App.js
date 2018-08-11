import React from 'react';
import Header from './blocks/Header';
import Copyright from './blocks/Copyright';
import Footer from './regions/Footer';

const App = () => (
  <div className="container">
    <Header />
    <Footer>
      <Copyright />
    </Footer>
  </div>
);

export default App;
