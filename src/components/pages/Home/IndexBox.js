import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    rgbToHex,
    Table, TableBody, TableCell, TableRow, withStyles
} from '@material-ui/core';

const ITable = withStyles((theme) => ({
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

const StyledTableCell = withStyles((theme) => ({
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

const textColor = (value) => {
    if (value > 0) {
        return '#2a9d8f';
    } if (value < 0) {
        return '#e63946';
    }
    return '#888888';
};

const IndexBox = (props) => {
    const index = props.marketIndex

    const show = (value) => {
        if (value > 0)
            return '+' + parseFloat(value).toFixed(2);
        return parseFloat(value).toFixed(2);
    }

    return (
        <React.Fragment>
            <ITable>
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
            </ITable>

        </React.Fragment>
    );
};

export default IndexBox;