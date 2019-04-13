import * as React from 'react';

import { Routes } from './Routes';
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
                 <Routes />
            </div>
        );
    }
}