import {
    Table, TableCell, TableRow, Typography, withStyles
} from '@material-ui/core';

export const STable = withStyles(() => ({
    root: {
        minWidth: 350,
    },
}))(Table);

export const SymbolTableRow = withStyles(() => ({
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
        fontSize: '13px',
        fontWeight: '800',
    },
}))(Typography);

export const HeadTableCell = withStyles(() => ({
    root: {
        color: '#9b9b9b',
        fontSize: '10px',
    },
}))(TableCell);


export const CaptionTableCell = withStyles(() => ({
    root: {
        paddingBottom: 2,
        paddingTop: 0,
        color: '#468faf',
        fontSize: '10px',
        borderTop: 'none',
    },
}))(TableCell);

export const SymbolTableCell = withStyles(() => ({
    root: {
        paddingBottom: 0,
        paddingTop: 2,
        borderBottom: 'none',
    },
}))(TableCell);
