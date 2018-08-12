import React from 'react';
import './Main.css';

const Main = ({ children }) => (
  <main id="main" role="main">
    <div className="container">{children}</div>
  </main>
);

export default Main;
