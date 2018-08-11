import React from 'react';
import Link from '../elements/Link';
import logo from '../assets/images/fort.png';

const Logo = () => (
  <div id="logo">
    <Link href={''}>
      <img src={logo} width={80} height={80} alt="Fort security" />
    </Link>
  </div>
);

export default Logo;
