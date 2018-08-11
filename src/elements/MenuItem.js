import React from 'react';
import Link from './Link';

const MenuItem = ({ text }) => (
  <li className="menu-item">
    <Link href={''}>{text}</Link>
  </li>
);

export default MenuItem;
