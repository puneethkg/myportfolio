import * as React from "react";

import { NavigationType } from '../../../models';

export interface HeaderProps {
    topNavLinks: Array<NavigationType>;
}

export class NavBar extends React.Component<HeaderProps, any> {
    static displayName = "Top Navigation Bar";

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
                                <li className="pull-right">
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