import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';

import {
    Drawer, List, ListItem, ListItemText, Toolbar,
} from '@material-ui/core';

import { handleDrawerToggle } from '../../actions'


const drawerWidth = 100;

const useStyles = makeStyles(() => ({
    drawer: {
        display: 'block',
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
}));

const drawerContent = [
    {
        name: 'Home',
        link: '/',
    }, {
        name: 'Search',
        link: '/search',
    }, {
        name: 'Contact',
        link: '/contact',
    },
]

const AppDrawer = () => {
    const { isDrawerOpen } = useSelector(state => ({
        isDrawerOpen: state.isDrawerOpen.drawerOpen,
    }));

    const dispatch = useDispatch();

    const classes = useStyles();

    const closingDrawer = () => {
        dispatch(handleDrawerToggle(!isDrawerOpen));
    }

    const drawer = drawerContent.map((page, index) => {
        return (
            <ListItem button
                component={React.forwardRef((props, ref) => <Link to={page.link} {...props} ref={ref} />)}
                onClick={closingDrawer}
                key={index}
            >
                <ListItemText primary={page.name} />
            </ListItem>
        )
    })

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
                <Toolbar />
                <div className={classes.drawerContainer} />
                <List>
                    {drawer}
                </List>
            </Drawer>
        </nav>
    )
};

export default AppDrawer;