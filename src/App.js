import React from 'react';
import Header from './blocks/Header';
import Main from './regions/Main';
import Footer from './regions/Footer';
import Copyright from './blocks/Copyright';

const App = () => (
  <div className="container">
    <Header />
    <Main />
    <Footer>
      <Copyright />
    </Footer>
  </div>
);

export default App;
