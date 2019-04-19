import * as React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import {
  WithStyles,
  Typography,
  AppBar,
  Toolbar,
  Grid,
  IconButton,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MenuIcon from '@material-ui/icons/Menu';
import withStyles from '@material-ui/core/styles/withStyles';

import { styles } from './Styles';
import { NavigationType } from '../../models';

interface AppHeaderProps extends WithStyles<typeof styles> {
  topNavLinks: Array<NavigationType>;
  text: any;
  type?: any;
  color?: any;
  classes: any;
}

type AppHeaderState = {
  menuDrawer: boolean;
  currentTab: string;
};

class AppHeader extends React.Component<WithStyles<typeof styles> & AppHeaderProps, AppHeaderState> {
  static displayName = "App Header";

  constructor(props: any) {
    super(props);

    this.state = {
      menuDrawer: false,
      currentTab: "Home"
    };
  }

  mobileMenuOpen = (event: any) => {
    this.setState({ menuDrawer: true });
  }

  mobileMenuClose = (event: any) => {
    this.setState({ menuDrawer: false });
  }

  render() {
    let { topNavLinks, classes } = this.props;

    return (
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Grid container spacing={24} alignItems="baseline">
            <Grid item xs={12} className={classes.flex}>
              <div className={classes.inline}>
                <Typography variant="h6" color="inherit" noWrap>
                  <Link to='/' className={classes.link}>
                    {/* <img width={20} src={logo} alt="" /> */}
                    <span className={classes.tagline}>PUNEETH</span>
                  </Link>
                </Typography>
              </div>
              <React.Fragment>
                <div className={classes.productLogo}>
                  <Typography>
                    my portfolio
                  </Typography>
                </div>
                <div className={classes.iconContainer}>
                  <IconButton className={classes.iconButton} color="inherit" aria-label="Menu">
                    <MenuIcon />
                  </IconButton>
                </div>
                <div className={classes.tabContainer}>
                  <SwipeableDrawer anchor="right" open={this.state.menuDrawer} onClose={this.mobileMenuClose} onOpen={this.mobileMenuOpen}>>
                    <AppBar title="Menu" />
                    <List>
                      <ListItem>
                        <ListItemText primary="Home" />
                      </ListItem>
                    </List>
                  </SwipeableDrawer>
                  <Tabs value={this.state.currentTab} indicatorColor="primary" textColor="primary" onChange={this.mobileMenuClose}>
                    {topNavLinks && topNavLinks.length > 0 && topNavLinks.map((navLink: NavigationType) => (
                      <Tab value={navLink.id} label={navLink.description} href={navLink.url} classes={{ root: classes.tabItem }} />
                    ))}
                  </Tabs>
                </div>
              </React.Fragment>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withRouter(withStyles(styles, { withTheme: true })(AppHeader) as any);