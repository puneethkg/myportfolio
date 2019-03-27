import * as React from 'react';

import AppHeader from './AppHeader';
import WelcomeMessage from './WelcomeMessage';
import { getTopNavigationLinks } from '../store/Client';

export class Application extends React.Component<any> {
    static displayName = "App";

    constructor(props: any) {
        super(props);
        console.log('inside App constructor');
        getTopNavigationLinks();
    }

    render() {
        return (
            <div className="container">
                <WelcomeMessage />
                <AppHeader />
            </div>
        );
    }
}