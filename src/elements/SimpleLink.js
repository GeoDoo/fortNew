import React from 'react';

const SimpleLink = ({ href, children }) => (
  <a href={href} className="link">
    {children}
  </a>
);

export default SimpleLink;
