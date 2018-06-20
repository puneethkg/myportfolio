import * as React from 'react';

import AppHeader from './AppHeader';

export class App extends React.Component<any> {
    static displayName = "App";
    render() {
        return (
            <div className="container">
                <AppHeader />
            </div>
        );
    }
}