import React from 'react';
import createCopyright from '../adapters/copyright';
import './Copyright.css';

const Copyright = () => <div className="copyright">{createCopyright()}</div>;

export default Copyright;
