import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { blue, red } from '@material-ui/core/colors';

import { Application } from './views';
import Store from './store';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: red,
        text: {
            primary: '#263238',
            secondary: '#f5f5f5'
        }
    },
    typography: {
        useNextVariants: true,
    },
});

ReactDOM.render(
    <Provider store={Store}>
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Application />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById("container")
);