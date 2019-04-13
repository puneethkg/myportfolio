import * as React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import { Theme, createStyles, WithStyles, Typography } from '@material-ui/core';

const styles = (theme: Theme) => createStyles({
    root: { /* ... */ },
    paper: { /* ... */ },
    button: { /* ... */ },
    cu: {color: 'red'}
});
  
interface Props extends WithStyles<typeof styles> {
  foo?: number;
  bar?: boolean;
  text: any;
  type?: any;
  color?: any;
  classes: any;
}
  
const DecoratedSFC = withStyles(styles)(({ text, type, color, classes }: Props) => (
  <Typography variant={type} color={color} classes={classes}>
    {text}
  </Typography>
));

export const DecoratedClass = withStyles(styles)(
  class extends React.Component<Props> {
    render() {
      const { text, type, color, classes } = this.props
        return (
          <Typography variant={type} color={color} classes={classes.cu} className={classes.cu}>
            {text}
          </Typography>
        );
      }
    }
);