import * as React from 'react';

import { AppTitle } from './AppTitle';
import NavBar from "./NavBar";

export class AppHeader extends React.Component<any> {
    static displayName = "App";

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                 <AppTitle/>
                 <NavBar/>
            </div>
        );
    }
}