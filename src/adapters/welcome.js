import React from 'react';

// FIXME find some better way to handle keys
const createParagraphs = paragraphs =>
  paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>);

const createWelcome = data => {
  const { title, paragraphs, more } = data;
  return (
    <div className="welcome">
      <h1>
        {title.beginning} <span>{title.ending}</span>
      </h1>
      {createParagraphs(paragraphs)}
      <a href={more.link}>
        <em>{more.text}</em>
      </a>
    </div>
  );
};

export default createWelcome;
