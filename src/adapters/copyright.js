import React from 'react';
import {
  beginning,
  ascii,
  startYear,
  author,
  ending
} from '../assets/text/copyright.json';

export const createYearsRange = () =>
  `${startYear}-${new Date().getFullYear()}`;

const createCopyright = () => (
  <p>
    {`${beginning} ${ascii} ${createYearsRange(startYear)}`}
    {' - '}
    {`design-development:`}{' '}
    <a
      rel="noopener noreferrer"
      href="https://www.linkedin.com/in/georgekarametas"
      target="_blank"
    >
      {author}
    </a>{' '}
    {`${ending}`}
  </p>
);

export default createCopyright;
