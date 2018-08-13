import React from 'react';
import ExternalLink from './ExternalLink';
import SVG from './SVG';
import './SocialIcon.css';

const SocialIcon = ({ url, icon, alt = 'Social icon' }) => (
  <div className="social-icon">
    <ExternalLink href={url}>
      <SVG src={icon} width={48} height={48} alt={alt} />
    </ExternalLink>
  </div>
);

export default SocialIcon;
