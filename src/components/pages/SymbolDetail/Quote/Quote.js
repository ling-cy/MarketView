import React from 'react';
import { connect } from 'react-redux'
import { Table, TableBody, TableRow, Grid, TableHead } from '@material-ui/core';
import { HeadTableCell, BodyTableCell, BodyTableRow, BodyTypography, BodyThTypography } from "./StyledComponent"
import { fetchSSStat } from '../../../../actions';


class Quote extends React.Component {

    componentDidMount() {
        this.props.fetchSSStat(this.props.symb);
    }

    renderQuote() {
        const quote = this.props.quote;
        const stat = this.props.stat;

        if (!quote || quote === undefined || !stat || stat === undefined) {
            return <div>Loading...</div>
        }

        const open = quote.isUSMarketOpen === true ? "Open" : "Close";

        const numberWithCommas = (value) => {
            if (value !== null) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            }
            return ''
        };

        const shortenNumber = (value) => {
            if (value === null) {
                return '-'
            } if (value >= 1e12) {
                return (value / 1e12).toFixed(3) + 'T';
            } if (value >= 1e9) {
                return (value / 1e9).toFixed(3) + 'B'
            } if (value >= 1e6) {
                return (value / 1e6).toFixed(3) + 'M'
            } if (value >= 1000) {
                return (value / 1e3).toFixed(3) + 'k'
            }
            return value.toFixed(3)
        };

        const percentage = (value) => {
            if (value !== null) {
                return (value * 100).toFixed(2) + "%";
            }
            return '-'
        }

        const toFix = (value) => {
            if (value !== null) {
                return value.toFixed(2);
            }
            return '-'
        }

        const tableContent = [{
            title: 'Todays Trading',
            content: [
                { head: "Status", data: open },
                { head: "Previous Close", data: quote.previousClose },
                { head: "Today's Open", data: quote.open },
                { head: "Volume", data: numberWithCommas(quote.volume) },
                { head: "Previous Volume", data: numberWithCommas(quote.previousVolume) },
                { head: "Average Volume", data: numberWithCommas(quote.avgTotalVolume) },
                { head: "Market Cap", data: shortenNumber(quote.marketCap) },
                { head: "P/E Ratio", data: quote.peRatio },
            ]
        }, {
            title: 'Stock Price History',
            content: [
                { head: "52-Week High", data: stat.week52high },
                { head: "52-Week Low", data: stat.week52low },
                { head: "50-Day Moving Average", data: stat.day50MovingAvg },
                { head: "200-Day Moving Average", data: stat.day200MovingAvg },
                { head: "5-day Change", data: percentage(stat.day5ChangePercent) },
                { head: "1-month Change", data: percentage(stat.day30ChangePercent) },
                { head: "3-month Change", data: percentage(stat.month3ChangePercent) },
                { head: "6-month Change", data: percentage(stat.month6ChangePercent) },
                { head: "YTD Change", data: percentage(stat.ytdChangePercent) },
                { head: "52-Week Change", data: percentage(stat.week52change) },
                { head: "2-year Change", data: percentage(stat.year2ChangePercent) },
                { head: "5-year Change", data: percentage(stat.year5ChangePercent) },
                { head: "Max Change", data: percentage(stat.maxChangePercent) },

            ]
        }, {
            title: 'Share Statistics',
            content: [
                { head: "Avg Vol (1 month)", data: shortenNumber(stat.avg30Volume) },
                { head: "Avg Vol (10 day)", data: shortenNumber(stat.avg10Volume) },
                { head: "Shares Outstanding", data: shortenNumber(stat.sharesOutstanding) },
                { head: "Earning Per Share (TTM)", data: stat.ttmEPS },

            ]
        }, {
            title: 'Divdends & Splits',
            content: [
                { head: "Dividend Rate (TTM)", data: toFix(stat.ttmDividendRate) },
                { head: "Dvidend Yield", data: percentage(stat.dividendYield) },
            ]
        }
        ]

        return (
            <React.Fragment>
                {tableContent.map((table, index) => {
                    return (
                        <Grid item xs={12} sm={6} key={index}>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <HeadTableCell>{table.title}</HeadTableCell>
                                        <HeadTableCell> </HeadTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {table.content.map((row, index) => {
                                        return (
                                            <BodyTableRow key={index}>
                                                <BodyTableCell component="th" scope="row" >
                                                    <BodyThTypography>{row.head}</BodyThTypography>
                                                </BodyTableCell>
                                                <BodyTableCell align="right">
                                                    <BodyTypography >{row.data}</BodyTypography>
                                                </BodyTableCell>
                                            </BodyTableRow>
                                        )
                                    })
                                    }
                                </TableBody>
                            </Table>
                        </Grid>
                    )
                })
                }

            </React.Fragment>
        )
    }

    render() {
        return (
            <div>
                <Grid
                    container
                    spacing={1}
                    direction='row'
                    justify='center'
                    alignItems='flex-start'
                >
                    {this.renderQuote()}
                </Grid>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        quote: state.stock.resQuote,
        stat: state.stock.resStat,
    }
}

export default connect(
    mapStateToProps,
    { fetchSSStat }
)
    (Quote);