import React from 'react';
import SimpleLink from '../elements/SimpleLink';
import logo from '../assets/images/fort.png';
import './Logo.css';

const Logo = () => (
  <div id="logo">
    <SimpleLink href="/">
      <img src={logo} width={80} height={80} alt="Fort security" />
    </SimpleLink>
  </div>
);

export default Logo;
