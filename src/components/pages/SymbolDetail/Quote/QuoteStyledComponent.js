import { withStyles } from '@material-ui/core/styles';
import { TableRow, Typography, TableCell } from '@material-ui/core';


export const HeadTableCell = withStyles(() => ({
    root: {
        color: '#9b9b9b',
        fontSize: '14px',
    },
}))(TableCell);

export const BodyTableCell = withStyles(() => ({
    root: {
        paddingBottom: 0,
        paddingTop: 2,
        borderBottom: 'none',
    },
}))(TableCell);

export const BodyTableRow = withStyles(() => ({
    root: {
        height: 20,
    },
    head: {
        height: 35,
    }
}))(TableRow);

export const BodyTypography = withStyles(() => ({
    root: {
        fontSize: '14px',
        fontWeight: '500',
    },
}))(Typography);

export const BodyThTypography = withStyles(() => ({
    root: {
        fontSize: '14px',
        fontWeight: '350',
    },
}))(Typography);