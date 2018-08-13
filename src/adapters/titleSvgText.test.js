import { shallow } from 'enzyme';
import createTitleSvgText from './titleSvgText';

describe('createTitleSvgText', () => {
  it('should create the Intro block contents', () => {
    const data = {
      sections: [
        {
          title: 'Some title',
          svg: 'some.svg',
          text: 'Some text'
        }
      ]
    };

    const wrapper = shallow(createTitleSvgText(data));

    expect(wrapper.find('h2').length).toBe(1);
    expect(wrapper.find('SVG').length).toBe(1);
    expect(wrapper.find('p').length).toBe(1);
    expect(wrapper.find('h2').text()).toBe('Some title');
    expect(
      wrapper
        .find('SVG')
        .props()
        .src.includes('some')
    ).toBe(true);
    expect(wrapper.find('p').text()).toBe('Some text');
  });
});
