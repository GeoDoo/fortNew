import React from 'react';
import { shallow, mount } from 'enzyme';
import Drawer from './Drawer';

describe('Drawer', () => {
  it('should render without crashing', () => {
    shallow(<Drawer />);
  });

  describe('behavior', () => {
    let wrapper;

    it('should toggle CSS class appropriately', () => {
      wrapper = mount(<Drawer isOpen={true} />);
      expect(wrapper.render()[0].attribs).toEqual({
        id: 'drawer',
        class: ''
      });

      wrapper = mount(<Drawer isOpen={false} />);
      expect(wrapper.render()[0].attribs).toEqual({
        id: 'drawer',
        class: 'closed'
      });
    });
  });
});
