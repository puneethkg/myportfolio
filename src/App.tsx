import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Application } from './views';
import Store from './store';

import './resources/styles/app.css';

ReactDOM.render(
    <Provider store={Store}>
        <CssBaseline />
        <Application />
    </Provider>,
    document.getElementById("container")
);