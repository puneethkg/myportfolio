import * as React from 'react';

import AppHeader from './AppHeader';
import { getMenu } from './../store/Client';

export class App extends React.Component<any> {
    static displayName = "App";

    constructor(props: any) {
        super(props);
        console.log('inside index constructor');
        getMenu();
    }

    render() {
        return (
            <div className="container">
                <AppHeader />
            </div>
        );
    }
}