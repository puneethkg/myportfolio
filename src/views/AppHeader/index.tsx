import * as React from 'react';
import { withRouter } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'

import { DecoratedClass } from './AppTitle';

export class AppHeader extends React.Component<any> {
    static displayName = "App";

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
           <React.Fragment>
               <CssBaseline />
               <DecoratedClass text="ATHARV" />
           </React.Fragment>
        );
    }
}