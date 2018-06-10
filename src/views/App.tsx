import * as React from 'react';

import WelcomeMessage from './WelcomeMessage';

export class App extends React.Component<any> {
    static displayName = "App";
    render() {
        return (
            <div className="container">
                <WelcomeMessage />
            </div>
        );
    }
}