import { shallow } from 'enzyme';
import createTitleText from './titleText';

describe('createTitleText', () => {
  it('should create the Welcome block contents', () => {
    const data = {
      title: 'Some title',
      text: 'Some text'
    };

    const wrapper = shallow(createTitleText(data));

    expect(wrapper.find('h2').length).toBe(1);
    expect(wrapper.find('p').length).toBe(1);
    expect(wrapper.find('h2').text()).toBe('Some title');
    expect(wrapper.find('p').text()).toBe('Some text');
  });
});
