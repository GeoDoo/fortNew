import createWelcome from '../adapters/welcome';
import data from '../assets/text/welcome.json';
import './Welcome.css';

const Welcome = () => createWelcome(data);

export default Welcome;
