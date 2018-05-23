import * as React from 'react';
import * as DOM from 'react-dom';
import Header from './components/Header';//Add new import

const root = document.getElementById('app');

DOM.render(<Header />, root);