import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';
import history from '../../../history';

import { errorResponse } from './errorResponse'
import PageNotFound from './PageNotFound'
import theme, { errorPageStyles } from './errorPageStyles'



const email = 'lingcy.work@gmail.com'

const SearchError = () => {
    const classes = errorPageStyles();
    const { error } = useSelector((state) => ({
        error: state.error.error,
    }))

    const renderErrorMsg = () => {
        if (!error || error === undefined) {
            return (
                <PageNotFound />
            )
        }
        return (
            <React.Fragment>
                <Typography variant='h1'>Error: {error.status}</Typography>
                <Typography variant='h2'>{error.data}</Typography>
                <br />
                <Typography variant='p'>
                    {errorResponse(error.status)}
                </Typography>
            </React.Fragment>
        )
    }

    return (
        <ThemeProvider theme={theme}>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <WarningIcon style={{ fontSize: 80 }} />
                {renderErrorMsg()}
                <br />
                <Button
                    variant='contained'
                    onClick={() => history.push('/')}
                    className={classes.button}
                >
                    Back to home
                </Button>
                <Button
                    variant='contained'
                    className={classes.button}
                    component='a'
                    href={`mailto:${email}`}
                    style={{ textDecoration: 'none' }}
                >
                    Report
                </Button>
            </main>
        </ThemeProvider>
    );
}

export default SearchError;