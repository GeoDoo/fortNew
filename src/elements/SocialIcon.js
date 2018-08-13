import React from 'react';
import ExternalLink from './ExternalLink';
import './SocialIcon.css';

const SocialIcon = ({ url, icon, alt = 'Social icon' }) => (
  <div className="social-icon">
    <ExternalLink href={url}>
      <img src={icon} alt={alt} width={48} height={48} />
    </ExternalLink>
  </div>
);

export default SocialIcon;
