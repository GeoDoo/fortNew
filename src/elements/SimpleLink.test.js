import React from 'react';
import { shallow } from 'enzyme';
import SimpleLink from './SimpleLink';

describe('SimpleLink', () => {
  it('should render without crashing', () => {
    shallow(<SimpleLink />);
  });
});
