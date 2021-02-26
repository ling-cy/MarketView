import React from 'react';
import { connect } from 'react-redux';
import { fetchSSQuote, fetchSSStat, fetchSSNews } from '../../../../actions'

import PropTypes from 'prop-types';
import { HeaderA, HeaderB, HeaderC, HeaderD, HeaderE, HContainer } from './StyledComponent'


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


class Header extends React.Component {

    componentDidMount() {
        this.props.fetchSSQuote(this.props.symb);
        this.props.fetchSSStat(this.props.symb);
        this.props.fetchSSNews(this.props.symb);
    }

    renderHeader() {
        const symbol = this.props.quote;
        if (!symbol || symbol === undefined) {
            return <div>Loading...</div>
        };
        const addPDecimal = Number.isInteger(symbol.latestPrice) ? '.00' : '';
        const addCDecimal = Number.isInteger(symbol.change) ? '.00' : '';
        const addCPDecimal = Number.isInteger(symbol.changePercent) && symbol.changePercent !== 0 ? '.00' : '';

        return (
            <HContainer>
                <HeaderA>
                    {symbol.companyName} ({symbol.symbol})
                </HeaderA>
                <HeaderD>
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
                </HeaderC>
                <HeaderE>
                    At&nbsp;{symbol.latestSource}&#x0003A;&nbsp;{symbol.latestTime}.
                </HeaderE>
            </HContainer>
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
    location: PropTypes.object.isRequired,
};

export default connect(
    mapStateToProps,
    { fetchSSQuote, fetchSSStat, fetchSSNews }
)(Header);