import React from 'react';
import './Footer.css';

const Footer = ({ children }) => (
  <footer id="footer">
    <div className="container">{children}</div>
  </footer>
);

export default Footer;
