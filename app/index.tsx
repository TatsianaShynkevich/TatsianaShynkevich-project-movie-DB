import * as React from 'react';
import * as DOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import createBrowserHistory from "history/createBrowserHistory"
import {App} from './app';

const history = createBrowserHistory();
const root = document.getElementById('app');

DOM.render(<App />, root);