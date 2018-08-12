import { shallow } from 'enzyme';
import createWelcome from './welcome';

describe('createWelcome', () => {
  it('should create the Welcome block contents', () => {
    const data = {
      title: {
        beginning: 'Begin',
        ending: 'end'
      },
      paragraphs: ['first', 'second', 'third'],
      more: {
        text: 'text',
        link: '/about'
      }
    };

    const wrapper = shallow(createWelcome(data));
    expect(
      wrapper
        .find('h1')
        .text()
        .includes('Begin')
    ).toBe(true);
    expect(
      wrapper
        .find('h1')
        .text()
        .includes('end')
    ).toBe(true);

    expect(wrapper.find('p').length).toBe(3);
    expect(wrapper.find('a').props().href).toBe('/about');
    expect(wrapper.find('a').text()).toBe('text');
  });
});
