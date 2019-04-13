import * as React from "react";
import { RouteComponentProps } from 'react-router-dom';
import { Theme, withStyles, createStyles } from '@material-ui/core/styles';



import { NavigationType } from '../../../models';
import { withRouter } from "react-router-dom";

type HeaderProps = RouteComponentProps<any> & {
    topNavLinks: Array<NavigationType>;
    classes: any;
}

const styles = (theme: Theme) => createStyles ({
    root: {
        width: '100%',
    },
    avatar: {
        marginRight: 25
    },
    summary: {
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        height: '100%',
        verticalAlign: 'middle',
        flexBasis: '33.33%',
        flexShrink: 0,
        color: theme.palette.text.secondary,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
    },
});
 
class NavBar extends React.Component<HeaderProps> {
    static displayName = "Top Navigation Bar";

    constructor(props: any) {
        super(props);
    }

    render() {
        let {topNavLinks} = this.props;
        const { classes } = this.props;
        return(
            <div className="nav-bar pull-right">
                <ul>
                    {
                        topNavLinks && topNavLinks.length > 0 && topNavLinks.map((navLink: NavigationType) => {
                            return(
                                <li className={classes.avatar}>
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

export default withRouter((withStyles(styles as any, {withTheme: true})(NavBar as any)) as any);