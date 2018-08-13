import React from 'react';

const ExternalLink = ({ href, children }) => (
  <a rel="noopener noreferrer" href={href} className="link" target="_blank">
    {children}
  </a>
);

export default ExternalLink;
