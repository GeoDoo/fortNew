import React from 'react';
import SimpleLink from '../elements/SimpleLink';
import logo from '../assets/images/fort.png';
import './Logo.css';

const Logo = () => (
  <div id="logo">
    <SimpleLink href="/">
      <img src={logo} width={60} height={60} alt="Fort Security" />
    </SimpleLink>
  </div>
);

export default Logo;
