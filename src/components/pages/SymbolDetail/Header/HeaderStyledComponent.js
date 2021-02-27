import { Typography, Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

export const HeaderA = withStyles(() => ({
    root: {
        fontWeight: 1000,
        fontSize: '23px',
        letterSpacing: '-0.75px',
    },
}))(Typography);

export const HeaderB = withStyles(() => ({
    root: {
        fontWeight: 1000,
        fontSize: '34px',
        letterSpacing: '-1px',
    },
}))(Typography);

export const HeaderC = withStyles(() => ({
    root: {
        fontWeight: 500,
        fontSize: '24px',
        letterSpacing: '-0.75px',
    },
}))(Typography);

export const HeaderD = withStyles(() => ({
    root: {
        fontWeight: 400,
        fontSize: '14px',
        letterSpacing: '-0.5px',
        color: '#898989',
        marginTop: '-6px',
        marginBottom: '3px',
    },
}))(Typography);

export const HeaderE = withStyles(() => ({
    root: {
        fontWeight: 400,
        fontSize: '14px',
        letterSpacing: '-0.5px',
        color: '#898989',
        marginTop: '-9px',
    },
}))(Typography);

export const HContainer = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2, 1, 1, 2),
        backgroundColor: theme.palette.background.paper,
        maxWidth: '1250px',
        borderWidth: '5px',
    },
}))(Container);