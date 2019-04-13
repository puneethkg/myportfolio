import * as React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';

import { AppHeader } from './AppHeader';
import NavBar from './AppHeader/NavBar';

export const Routes: React.StatelessComponent = () => (
    <HashRouter>
        <Switch>
            <Route exact path='/' component={AppHeader} />
            <Route exact path='/navBar' component={NavBar} />
        </Switch>
    </HashRouter>
);