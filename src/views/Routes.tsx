import * as React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';

import AppHeader from './AppHeader';

export const Routes: React.StatelessComponent = () => (
    <HashRouter>
        <Switch>
            <Route exact path='/' component={AppHeader} />
        </Switch>
    </HashRouter>
);