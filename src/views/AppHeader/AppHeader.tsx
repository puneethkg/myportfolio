import * as React from "react";

import { NavigationType } from './../../models';

export interface HeaderProps {
    topNavLinks: Array<NavigationType>;
}

export class AppHeader extends React.Component<HeaderProps, any> {
    static displayName = "App Header";

    constructor(props: any) {
        super(props);
    }

    render() {
        let {topNavLinks} = this.props;

        return(
            <div>
                <ul>
                    {
                        topNavLinks && topNavLinks.length > 0 && topNavLinks.map((navLink: NavigationType) => {
                            return(
                                <li>
                                    {navLink.description}
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}