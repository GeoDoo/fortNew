import React from 'react';
import SimpleLink from './SimpleLink';

const MenuItem = ({ text }) => (
  <li className="menu-item">
    <SimpleLink href={''}>{text}</SimpleLink>
  </li>
);

export default MenuItem;
