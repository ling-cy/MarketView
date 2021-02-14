import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,

    content: {
        flexGrow: 1,
        padding: theme.spacing(1),
    },
}));





const Highlight = () => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <React.Fragment>
            <main className={classes.content}>
                <div className={classes.toolbar} />
stock page!
</main>
        </React.Fragment>
    );
};

export default Highlight;