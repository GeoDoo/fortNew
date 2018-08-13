import React from 'react';
import SimpleLink from './SimpleLink';

const MenuItem = ({ text, href }) => (
  <li className="menu-item">
    <SimpleLink href={href}>{text}</SimpleLink>
  </li>
);

export default MenuItem;
