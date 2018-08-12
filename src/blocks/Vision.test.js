import React from 'react';
import { shallow } from 'enzyme';
import Vision from './Vision';

describe('Vision', () => {
  it('should render without crashing', () => {
    shallow(<Vision />);
  });
});
