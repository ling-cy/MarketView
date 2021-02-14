import React from 'react';
import { connect } from 'react-redux';
import { fetchSSQuote } from '../../../actions'


import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

const styles = (theme) => ({
    div: {
        padding: theme.spacing(2, 1, 1, 2),
        backgroundColor: theme.palette.background.paper,
        maxWidth: '1250px',
        borderWidth: '10px',
    }
})

const HeaderA = withStyles(() => ({
    root: {
        fontWeight: 1000,
        fontSize: '23px',
        letterSpacing: '-0.75px',
    },
}))(Typography);

const HeaderB = withStyles(() => ({
    root: {
        fontWeight: 1000,
        fontSize: '38px',
        letterSpacing: '-1px',
    },
}))(Typography);

const HeaderC = withStyles(() => ({
    root: {
        fontWeight: 500,
        fontSize: '28px',
        letterSpacing: '-0.75px',
    },
}))(Typography);

const HeaderD = withStyles(() => ({
    root: {
        fontWeight: 400,
        fontSize: '14px',
        letterSpacing: '-0.5px',
        color: '#898989',
        marginTop: '-6px',
        marginBottom: '3px',
    },
}))(Typography);

const HeaderE = withStyles(() => ({
    root: {
        fontWeight: 400,
        fontSize: '14px',
        letterSpacing: '-0.5px',
        color: '#898989',
        marginTop: '-9px',
    },
}))(Typography);

const textColor = (value) => {
    if (value > 0) {
        return '#2a9d8f';
    } if (value < 0) {
        return '#e63946';
    }
    return 'black';
};

const arrow = (value) => {
    if (value > 0) {
        return <TrendingUpIcon />
    } if (value < 0) {
        return <TrendingDownIcon />
    }
    return;
}


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


class Header extends React.Component {

    componentDidMount() {
        // const { location } = this.props;
        // const searchParams = new URLSearchParams(location.search)
        // const symbol = searchParams.get('symb')
        this.props.fetchSSQuote(this.props.symb);
    }


    renderHeader() {
        const { classes } = this.props;
        const symbol = this.props.quote;
        if (!symbol || symbol === undefined) {
            return <div>Loading...</div>
        };
        const addPDecimal = Number.isInteger(symbol.latestPrice) ? '.00' : '';
        const addCDecimal = Number.isInteger(symbol.change) ? '.00' : '';
        const addCPDecimal = Number.isInteger(symbol.changePercent) && symbol.changePercent !== 0 ? '.00' : '';

        return (
            <div className={classes.div}>
                <HeaderA className={classes.sHead}>
                    {symbol.companyName} ({symbol.symbol})
                </HeaderA>
                <HeaderD className={classes.sHead}>
                    Mimic Real Time Price from IEX Cloud. Currency in USD.
                </HeaderD>

                <HeaderB component='span'>
                    {symbol.latestPrice}{addPDecimal}
                    &nbsp;&nbsp;&nbsp;&nbsp;
                </HeaderB>

                <HeaderC
                    component='span'
                    style={{ color: textColor(`${symbol.change}`) }}>
                    {change(symbol.change)}{addCDecimal}
                    &nbsp;({pChange(symbol.changePercent)}{addCPDecimal}%)
                    &nbsp;{arrow(symbol.change)}
                </HeaderC>
                <HeaderE className={classes.sHead}>
                    At&nbsp;{symbol.latestSource}&#x0003A;&nbsp;{symbol.latestTime}.
                </HeaderE>

            </div >
        )
    }

    render() {

        return (
            <div>
                {this.renderHeader()}
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        quote: state.stock.resQuote,
        theme: state.theme.theme,
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
};

export default withStyles(styles)(
    connect(
        mapStateToProps,
        { fetchSSQuote }
    )(Header));