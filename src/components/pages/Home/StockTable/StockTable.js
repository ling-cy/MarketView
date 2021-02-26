import React from 'react';
import { TableBody, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import {
    STable, SymbolTableRow, BodyTypography, BodyThTypography,
    HeadTableCell, CaptionTableCell, SymbolTableCell
} from './StyledComponent'
import history from '../../../../history'




const createData = (symbol, lastPrice, change, pChange, company) => {
    return { symbol, lastPrice, change, pChange, company };
}

const textColor = (value) => {
    if (value > 0) {
        return '#2a9d8f';
    } if (value < 0) {
        return '#e63946';
    }
    return 'black';
};

const pChange = (value) => {
    if (value > 0) {
        return '+' + (value * 100).toFixed(2);
    }
    return (value * 100).toFixed(2);
};

const change = (value) => {
    if (value > 0) {
        return '+' + value;
    }
    return value;
};


const StockTable = (props) => {
    const rows = props.stockSymbols.slice(0, 5).map((symbol) => {
        return createData(`${symbol.symbol}`, `${symbol.iexClose}`, `${symbol.change}`, `${symbol.changePercent}`, `${symbol.companyName}`)
    })

    return (
        <TableContainer component={Paper}>
            <STable size='small'>
                <TableHead>
                    <TableRow>
                        <HeadTableCell >Symbol</HeadTableCell>
                        <HeadTableCell align="right">Last Price</HeadTableCell>
                        <HeadTableCell align="right">Change</HeadTableCell>
                        <HeadTableCell align="right">% Change</HeadTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <React.Fragment key={row.symbol}>
                            <SymbolTableRow >
                                <SymbolTableCell component="th" scope="row" onClick={() => history.push(`/search/quote?symb=${row.symbol}`)}>
                                    <BodyThTypography>
                                        {row.symbol}</BodyThTypography></SymbolTableCell>
                                <SymbolTableCell align="right">
                                    <BodyTypography >
                                        {row.lastPrice}</BodyTypography></SymbolTableCell>
                                <SymbolTableCell align="right">
                                    <BodyTypography
                                        style={{ color: textColor(`${row.change}`) }}>
                                        {change(row.change)}</BodyTypography></SymbolTableCell>
                                <SymbolTableCell align="right">
                                    <BodyTypography
                                        style={{ color: textColor(`${row.change}`) }}>
                                        {pChange(row.pChange)}%</BodyTypography></SymbolTableCell>
                            </SymbolTableRow>
                            <TableRow>
                                <CaptionTableCell colSpan={4}>
                                    {row.company}
                                </CaptionTableCell>
                            </TableRow>
                        </React.Fragment>
                    ))}
                </TableBody>
            </STable>
        </TableContainer>
    )
};

export default StockTable;