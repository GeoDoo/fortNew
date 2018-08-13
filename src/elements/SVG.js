import React from 'react';
import './SVG.css';

const SVG = ({ src, width, height, alt }) => {
  if (src && !src.includes('svg')) {
    throw new Error('Please provide a valid SVG');
  }

  return (
    <img className="image" src={src} width={width} height={height} alt={alt} />
  );
};

export default SVG;
