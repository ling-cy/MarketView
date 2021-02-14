import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import {
    Divider, Drawer, Hidden, List, ListItem, ListItemIcon, ListItemText, Toolbar,
} from '@material-ui/core';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import HighlightIcon from '@material-ui/icons/Highlight';
import StarsIcon from '@material-ui/icons/Stars';
import HomeIcon from '@material-ui/icons/Home';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import SettingsIcon from '@material-ui/icons/Settings';
import Typography from '@material-ui/core/Typography';

import { handleDrawerToggle } from '../../actions'



const drawerBreakPoints = 1020;
const drawerWidth = 100;

const styles = (theme) => ({
    drawer: {
        // [theme.breakpoints.up(drawerBreakPoints)]: {
        display: 'block',
        width: drawerWidth,
        flexShrink: 0,
        // },
        // display: 'none',
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    // footer: {
    //     position: 'absolute',
    //     bottom: 0,
    //     fontSize: '10px',
    //     padding: theme.spacing(2),
    //     color: 'default',
    // },
});


class AppDrawer extends React.Component {
    render() {
        const { window, classes, theme } = this.props;
        // const [mobileOpen, setMobileOpen] = useState(false);

        // const handleDrawerToggle = () => {
        //     setMobileOpen(!mobileOpen);
        // };

        // const container = window !== undefined ? () => window().document.body : undefined;


        const drawer = (
            <React.Fragment>
                {/* <Drawer
                    //     className={classes.drawer}
                    //     variant='permanent'
                    //     classes={{
                    //         paper: classes.drawerPaper,
                    //     }}> */}
                <Toolbar />
                <div className={classes.drawerContainer} />

                <List>

                    <ListItem button
                        component={React.forwardRef((props, ref) => <Link to="/" {...props} ref={ref} />)}>
                        {/* <ListItemIcon><HomeIcon /></ListItemIcon> */}
                        <ListItemText primary="Home" />
                    </ListItem>

                    <ListItem button
                        component={React.forwardRef((props, ref) => <Link to="/us-stock" {...props} ref={ref} />)}>
                        {/* <ListItemIcon><MenuBookIcon /></ListItemIcon> */}
                        <ListItemText primary="Stock" />
                    </ListItem>

                    {/* <ListItem button
                        component={React.forwardRef((props, ref) => <Link to="/search/symb?symb=" {...props} ref={ref} />)}> */}
                    {/* <ListItemIcon><HighlightIcon /></ListItemIcon> */}
                    {/* <ListItemText primary="Detail" />
                    </ListItem> */}

                    <ListItem button
                        component={React.forwardRef((props, ref) => <Link to="/watchlist" {...props} ref={ref} />)}>
                        {/* <ListItemIcon><StarsIcon /></ListItemIcon> */}
                        <ListItemText primary="Watchlist" />
                    </ListItem>

                </List>
                <Divider />
                <List>
                    <ListItem button>
                        {/* <ListItemIcon><SettingsIcon /></ListItemIcon> */}
                        <ListItemText primary="Setting" />
                    </ListItem>
                    <ListItem button>
                        {/* <ListItemIcon><ContactSupportIcon /></ListItemIcon> */}
                        <ListItemText primary="Contact" />
                    </ListItem>
                </List>
                {/* <Typography
                    display="block"
                    // gutterBottom
                    className={classes.footer}
                >
                    © 2021 CY.LING. <br />All Rights Reserved.
            </Typography> */}
                {/* </Drawer > */}
            </React.Fragment>
        );

        return (
            <nav className={classes.drawer} aria-label="app drawer">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                {/* <Hidden implementation="css"> */}
                <Drawer
                    // container={container}
                    variant='temporary'
                    anchor='right'
                    open={this.props.isDrawerOpen}
                    onClose={() => { this.props.handleDrawerToggle(!this.props.isDrawerOpen) }}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    {drawer}
                </Drawer>
                {/* </Hidden> */}

            </nav>
        )
    };
};

AppDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return { isDrawerOpen: state.isDrawerOpen.drawerOpen }
}

export default withStyles(styles, { withTheme: true })(
    connect(
        mapStateToProps,
        { handleDrawerToggle }
    )(AppDrawer));