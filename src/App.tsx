import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Application } from './views';
import Store from './store';

import './resources/styles/app.css';

ReactDOM.render(
    <Provider store={Store}>
        <Application />
    </Provider>,
    document.getElementById("container")
);