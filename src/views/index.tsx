import * as React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { blue, red } from '@material-ui/core/colors';

import AppHeader from './AppHeader';
import { getTopNavigationLinks } from '../store/Client';

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: red,
    },
    typography: {
        useNextVariants: true,
    },
});

export class Application extends React.Component<any> {
    static displayName = "App";

    constructor(props: any) {
        super(props);
        console.log('inside App constructor');
        getTopNavigationLinks();
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <HashRouter>
                    <Switch>
                        <Route exact path='/' component={AppHeader} />
                    </Switch>
                </HashRouter>
            </MuiThemeProvider>
        );
    }
}