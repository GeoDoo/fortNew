import React from 'react';
import Intro from '../blocks/Intro';
import Welcome from '../blocks/Welcome';

const Home = ({ children }) => (
  <div className="home">
    <Intro />
    <Welcome />
  </div>
);

export default Home;
