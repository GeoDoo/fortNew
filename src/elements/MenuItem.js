import React from 'react';
import SimpleLink from './SimpleLink';

const MenuItem = ({ text, link }) => (
  <li className="menu-item">
    <SimpleLink href={link}>{text}</SimpleLink>
  </li>
);

export default MenuItem;
