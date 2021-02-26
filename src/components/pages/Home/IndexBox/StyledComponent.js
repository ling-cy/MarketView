import { Table, TableCell, withStyles } from '@material-ui/core';

export const ITable = withStyles((theme) => ({
    root: {
        minWidth: 170,
        height: '100%',
        [theme.breakpoints.down('xs')]: {
            borderWidth: '4px 0 0 0',
            borderStyle: 'solid',
            borderColor: 'rgb(0,0,0,0.1)'
        },

    },
}))(Table);

export const StyledTableCell = withStyles((theme) => ({
    root: {
        paddingBottom: 3,
        paddingTop: 3,
        fontSize: '13px',
        borderTop: 'none',
        borderBottom: 'none',
        borderLeft: 'solid',
        borderWidth: '2px',
        fontWeight: '500',
        [theme.breakpoints.down('xs')]: {
            border: 'none',
        },
    },
}))(TableCell);