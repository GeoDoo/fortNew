import createWelcome from '../adapters/welcome';
import data from '../assets/text/welcome.json';

const Welcome = () => createWelcome(data);

export default Welcome;
