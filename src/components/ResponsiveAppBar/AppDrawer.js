import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

import { drawerStyles } from './AppBarStyles'
import {
    Drawer, List, ListItem, Toolbar, Typography, Icon
} from '@material-ui/core';

import ThemeSwitch from './ThemeSwitch'
import { handleDrawerToggle } from '../../actions'

const drawerContent = [
    {
        name: 'Home',
        link: '/',
    }, {
        name: 'Search',
        link: '/search',
    },
]

const AppDrawer = () => {
    const { isDrawerOpen } = useSelector(state => ({
        isDrawerOpen: state.isDrawerOpen.drawerOpen,
    }));
    const dispatch = useDispatch();
    const classes = drawerStyles();
    const closingDrawer = () => {
        dispatch(handleDrawerToggle(!isDrawerOpen));
    };

    const drawer = drawerContent.map((page, index) => {
        return (
            <ListItem button
                component={React.forwardRef((props, ref) => <Link to={page.link} {...props} ref={ref} />)}
                onClick={closingDrawer}
                key={index}
            >
                <Typography className={classes.listText}>
                    {page.name}
                </Typography>
            </ListItem>
        )
    });

    return (
        <nav className={classes.drawer} aria-label="app drawer">
            <Drawer
                variant='temporary'
                anchor='right'
                open={isDrawerOpen}
                onClose={closingDrawer}
                classes={{
                    paper: classes.drawerPaper,
                }}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
            >
                <Toolbar>
                    <Icon
                        edge="start"
                        className={classes.themeIcon}
                    >
                        <ThemeSwitch />
                    </Icon>
                </Toolbar>
                <div className={classes.drawerContainer} />
                <List>
                    {drawer}
                </List>
            </Drawer>
        </nav>
    )
};

export default AppDrawer;