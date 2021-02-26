import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

export const styles = (theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        padding: theme.spacing(3),
    },
    paper: {
        margin: theme.spacing(0, 0, 1, 0),
        padding: theme.spacing(1, 1, 4, 2),
        borderLeft: 'solid',
        borderWidth: '4px',
    }
});

export const Header = withStyles((theme) => ({
    root: {
        fontWeight: 1000,
        fontSize: '28px',
        letterSpacing: '-1px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '20px',
            letterSpacing: '-1.5px',
        },
    },
}))(Typography);

export const ResultNoTy = withStyles(() => ({
    root: {
        fontWeight: 400,
        fontSize: '14px',
        letterSpacing: '-0.5px',
        color: '#898989',
        marginTop: '-2px',
        marginBottom: '3px',
    },
}))(Typography);

export const ResultNameTy = withStyles(() => ({
    root: {
        fontWeight: 400,
        fontSize: '17px',
        letterSpacing: '-0.5px',
        color: '#898989',
        marginTop: '1px',
        marginBottom: '-1px',
    },
}))(Typography);

export const ResultSybTy = withStyles(() => ({
    root: {
        fontWeight: 400,
        fontSize: '17px',
        letterSpacing: '-0.5px',
        color: 'primary',
        marginTop: '-1px',
        marginBottom: '1px',
        display: 'inline',
        float: 'left',
    },
}))(Typography);

export const ResultExTy = withStyles(() => ({
    root: {
        fontWeight: 400,
        fontSize: '12px',
        letterSpacing: '-0.5px',
        color: '#468faf',
        marginTop: '3px',
        display: 'inline',
        float: 'right',
    },
}))(Typography);