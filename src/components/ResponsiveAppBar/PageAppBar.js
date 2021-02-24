import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { handleDrawerToggle } from '../../actions'
import SearchBar from './SearchBar';
import logoL from './image/logoL.png';
import ThemeSwitch from './ThemeSwitch';

import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar, Icon, Toolbar
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: '#777777',
        boxShadow: 'none',
    },
    logoL: {
        maxWidth: "150px",
        padding: theme.spacing(1),

    },
    appBarIcon: {
        display: 'flex',
        position: 'absolute',
        right: 20,
    },
    button: {
        margin: 10,
    },
}));

const PageAppBar = () => {
    const classes = useStyles();
    const { isDrawerOpen } = useSelector(state => ({
        isDrawerOpen: state.isDrawerOpen.drawerOpen
    }));
    const dispatch = useDispatch();
    return (
        <AppBar
            position="fixed"
            className={classes.appBar}
        >
            <Toolbar>
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