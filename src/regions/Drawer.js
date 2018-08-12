import React from 'react';
import './Drawer.css';

const Drawer = ({ isOpen, children }) => (
  <aside id="drawer" className={isOpen ? '' : 'closed'}>
    <div className="frame">{children}</div>
  </aside>
);

export default Drawer;
