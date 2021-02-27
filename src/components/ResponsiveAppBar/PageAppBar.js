import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { handleDrawerToggle } from '../../actions'
import SearchBar from './SearchBar';
import logoL from './image/logoL.png';
import ThemeSwitch from './ThemeSwitch';
import { appBarStyles } from './AppBarStyles';
import {
    AppBar, Icon, Toolbar
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const PageAppBar = () => {
    const classes = appBarStyles();
    const { isDrawerOpen } = useSelector(state => ({
        isDrawerOpen: state.isDrawerOpen.drawerOpen
    }));
    const dispatch = useDispatch();
    return (
        <AppBar
            position="fixed"
            style={{ backgroundColor: 'rgb(136,136,136,0.9)' }}
        >
            <Toolbar>
                <Link to='/'>
                    <img className={classes.logoL} src={logoL} alt='Logo' />
                </Link>

                <SearchBar />

                <div className={classes.appBarIcon}>
                    <Icon
                        edge="start"
                        className={classes.themeIcon}
                    >
                        <ThemeSwitch />
                    </Icon>
                    <Icon
                        edge="end"
                        className={classes.menuIcon}
                        onClick={() => { dispatch(handleDrawerToggle(!isDrawerOpen)) }}
                    >
                        <MenuIcon />
                    </Icon>

                </div>
            </Toolbar>
        </AppBar>
    )
};


export default PageAppBar;