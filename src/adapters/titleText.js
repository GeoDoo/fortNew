import React from 'react';

const createTitleText = data => {
  const { title, text } = data;
  return (
    <div className="title-text">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default createTitleText;
