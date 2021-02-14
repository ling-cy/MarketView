import React from 'react';

import {
    CssBaseline,
} from '@material-ui/core';

import AppDrawer from './AppDrawer';
import PageAppBar from './PageAppBar';

const ResponsiveAppBar = () => {

    return (
        <React.Fragment>
            <CssBaseline />
            <PageAppBar />
            <AppDrawer />
        </React.Fragment>
    )
}

export default ResponsiveAppBar;