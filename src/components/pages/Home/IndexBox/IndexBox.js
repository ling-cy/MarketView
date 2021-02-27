import React from 'react';
import { TableBody, TableRow } from '@material-ui/core';
import { ITable, StyledTableCell } from './IndexBoxStyledComponent'

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