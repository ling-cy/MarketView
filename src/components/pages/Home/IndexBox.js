import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Table, TableBody, TableCell, TableRow, withStyles
} from '@material-ui/core';

const useStyles = makeStyles({
    table: {
        minWidth: 170,
    },

});

const StyledTableCell = withStyles(() => ({
    root: {
        paddingBottom: 1,
        paddingTop: 1,
        fontSize: '13px',
        borderTop: 'none',
        borderBottom: 'none',
        borderLeft: 'solid',
        borderWidth: '2px',
        fontWeight: '600',
    },
}))(TableCell);

const textColor = (value) => {
    if (value > 0) {
        return '#2a9d8f';
    } if (value < 0) {
        return '#e63946';
    }
    return 'black';
};

const IndexBox = (props) => {
    const classes = useStyles();
    const index = props.marketIndex

    const show = (value) => {
        if (value > 0)
            return '+' + parseFloat(value).toFixed(2);
        return parseFloat(value).toFixed(2);
    }

    return (
        <React.Fragment>
            <Table className={classes.table}>
                <TableBody>
                    <TableRow>
                        <StyledTableCell>{index.name}</StyledTableCell>
                    </TableRow>
                    <TableRow>
                        <StyledTableCell>{parseFloat(index.price).toFixed(2)}</StyledTableCell>
                    </TableRow>
                    <TableRow>
                        <StyledTableCell style={{ color: textColor(`${index.change}`) }}>
                            {show(index.change)}&nbsp;
                            ({show(index.changesPercentage)}%)</StyledTableCell>
                    </TableRow>
                </TableBody>
            </Table>

        </React.Fragment>
    );
};

export default IndexBox;