import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { handleDrawerToggle } from '../../actions'

import SearchBar from './SearchBar';
import logoL from '../image/logoL.png';
import ThemeSwitch from './ThemeSwitch';

import {
    AppBar, Icon, Toolbar
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

const drawerBreakPoints = 1020;
const styles = (theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: '#777777',
        boxShadow: 'none',
    },

    // sectionDesktop: {
    //     display: 'none',
    //     [theme.breakpoints.up(drawerBreakPoints)]: {
    //         display: 'flex',
    //         position: 'absolute',
    //         right: 50,
    //     },
    // },
    logoL: {
        maxWidth: "150px",
        // marginLeft: -35,
        padding: theme.spacing(1),
        // [theme.breakpoints.down('xs')]: {
        //     display: 'none',
        // },
    },
    // logoS: {
    //     maxWidth: "150px",
    //     marginLeft: -20,
    //     padding: theme.spacing(1),
    //     [theme.breakpoints.up('sm')]: {
    //         display: 'none',
    //     },
    // },
    appBarIcon: {
        // display: 'none',
        // [theme.breakpoints.up('sm')]: {
        display: 'flex',
        position: 'absolute',
        right: 20,
        // },
    },
    button: {
        margin: 10,
    },
    // menuIcon: {
    //     display: 'block',
    //     position: 'absolute',
    //     right: 20,
    // },
    // menuButton: {
    //     marginRight: theme.spacing(1),
    // [theme.breakpoints.up(drawerBreakPoints)]: {
    //     display: 'none',
    // },
    // },

});

class PageAppBar extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <AppBar
                position="fixed"
                className={classes.appBar}
            >
                <Toolbar>
                    {/* shown on small screen */}

                    <Link to='/'>
                        <img className={classes.logoL} src={logoL} alt='Logo' />
                    </Link>

                    <SearchBar />

                    <div className={classes.appBarIcon}>
                        <Icon
                            color="default"
                            edge="start"
                            className={classes.button}
                        >
                            <ThemeSwitch />
                        </Icon>
                        <Icon
                            edge="end"
                            color="default"
                            className={classes.button}
                            onClick={() => { this.props.handleDrawerToggle(!this.props.isDrawerOpen) }}
                        >
                            {/* <AccountCircle /> */}
                            <MenuIcon />
                        </Icon>

                    </div>
                    {/* <div className={classes.menuIcon}>
                        <Icon
                            color="default"
                            aria-label="open drawer"
                            edge="start"
                            onClick={() => { this.props.handleDrawerToggle(!this.props.isDrawerOpen) }}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </Icon>
                    </div> */}
                </Toolbar>
            </AppBar>
        )
    }
};

PageAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return { isDrawerOpen: state.isDrawerOpen.drawerOpen }
}

export default withStyles(styles, { withTheme: true })(
    connect(
        mapStateToProps,
        { handleDrawerToggle }
    )(PageAppBar));