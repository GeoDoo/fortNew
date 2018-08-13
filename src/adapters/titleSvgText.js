import React from 'react';
import SVG from '../elements/SVG';

const createTitleSvgText = data => {
  const { sections } = data;
  return (
    <div className="intro">
      {sections.map(section => {
        const { title, svg, text } = section;
        return (
          <div
            key={title
              .split(' ')
              .join('')
              .toLowerCase()}
            className="title-svg-text"
          >
            <h2>{title}</h2>
            <div className="intro-svg center">
              <SVG
                src={require('../assets/images/' + svg)}
                width={200}
                height={200}
                alt={title}
              />
            </div>
            <p>{text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default createTitleSvgText;
