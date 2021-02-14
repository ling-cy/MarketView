import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const Watchlist = () => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <React.Fragment>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <h1>watchlist</h1>
            </main>
        </React.Fragment>
    );
};

export default Watchlist;