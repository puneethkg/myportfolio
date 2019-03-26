import * as React from "react";

export interface HeaderProps {
    menuItems: Array<string>;
}

export class AppHeader extends React.Component<HeaderProps, any> {
    static displayName = "App Header";

    constructor(props: any) {
        super(props);
    }

    render() {
        let {menuItems} = this.props;

        return(
            <div>
                <ul>
                    {
                        menuItems && menuItems.length > 0 && menuItems.map((menuItem: string) => {
                            return(
                                <li>
                                    {menuItem}
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}