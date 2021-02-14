import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper, Typography, withStyles
} from '@material-ui/core';
import history from '../../history'



const useStyles = makeStyles({
    table: {
        minWidth: 300,
        // maxWidth: 400,
    },

});

const SymbolTableRow = withStyles(() => ({
    root: {
        height: 20,
    },
    head: {
        height: 35,
    }
}))(TableRow);



const BodyTypography = withStyles(() => ({
    root: {
        fontSize: '14px',
        fontWeight: '500',
    },
}))(Typography);

const BodyThTypography = withStyles(() => ({
    root: {
        fontSize: '13px',
        fontWeight: '800',
    },
}))(Typography);

const HeadTableCell = withStyles(() => ({
    root: {
        color: '#9b9b9b',
        fontSize: '10px',
    },
}))(TableCell);


const CaptionTableCell = withStyles(() => ({
    root: {
        paddingBottom: 2,
        paddingTop: 0,
        color: '#468faf',
        fontSize: '10px',
        borderTop: 'none',
    },
}))(TableCell);

const SymbolTableCell = withStyles(() => ({
    root: {
        paddingBottom: 0,
        paddingTop: 2,
        borderBottom: 'none',
    },
}))(TableCell);

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
    const classes = useStyles();
    const rows = props.stockSymbols.slice(0, 5).map((symbol) => {
        return createData(`${symbol.symbol}`, `${symbol.iexClose}`, `${symbol.change}`, `${symbol.changePercent}`, `${symbol.companyName}`)
    })



    return (
        // <MuiThemeProvider theme={theme}>
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="stock table">
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
            </Table>
        </TableContainer>
        // </MuiThemeProvider>
    );
};

export default StockTable;