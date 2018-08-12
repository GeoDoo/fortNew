import React from 'react';
import createCopyright, { createYearsRange } from './copyright';
import data from '../assets/text/copyright.json';

describe('createYearsRange', () => {
  it('should make create the range starting from the start year up to current year', () => {
    const { startYear } = data;
    const currentYear = new Date().getFullYear();

    expect(createYearsRange(startYear)).toBe(`${startYear}-${currentYear}`);
  });
});

describe('createCopyright', () => {
  it('should contain copyright text and author link', () => {
    expect(createCopyright(data)).toEqual(
      <p>
        Copyright © 2013-2018 by{' '}
        <a
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/georgekarametas"
          target="_blank"
        >
          geodoo
        </a>{' '}
        - All rights reserved.
      </p>
    );
  });
});
