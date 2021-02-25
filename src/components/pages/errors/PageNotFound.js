import React from 'react';
import { Typography } from '@material-ui/core';

const PageNotFound = () => {
    return (
        <React.Fragment>
            <Typography variant='h1'>Error: 404</Typography>
            <Typography variant='h2'>Page not found</Typography>
            <br />
            <Typography variant='p'>
                The page you are looking for might have been removed, had its name changed or is temporarily unavailable.
                    </Typography>
        </React.Fragment>
    );
}

export default PageNotFound;


