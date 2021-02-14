import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

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

const Error404 = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <div>
                    <h1>404</h1>
                    <h2>Page not found</h2>
                    <p>The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
                    <Link to="/">home page</Link>
                </div>

            </main>
        </React.Fragment>
    );
}

export default Error404;