import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Grid, Paper } from '@material-ui/core';
import history from '../../../history'
import { Header, ResultNoTy, ResultNameTy, ResultSybTy, ResultExTy, styles } from './SearchResultStyles'



class SearchResult extends React.Component {

    resultCount() {
        const results = this.props.searchResult;
        if (results) {
            if (results.tickers.length >= 20) {
                return (
                    <ResultNoTy>
                        We have got {results.tickers.length} results. Please enter the entire
                        compnay name or stock symbol for a more accurate result.
                    </ResultNoTy>
                )
            } if (results.tickers.length === 0) {
                return (
                    <ResultNoTy>
                        We have got {results.tickers.length} results. Please enter a valid
                        compnay name or stock symbol.
                    </ResultNoTy>
                )
            }
            return (
                <ResultNoTy>
                    We have got {results.tickers.length} results.
                </ResultNoTy>
            )
        }
    }

    renderResult() {
        const { classes } = this.props;
        const results = this.props.searchResult;
        if (results === null || !results) {
            return (
                <ResultNoTy>
                    Please enter the company name or symbol in the search bar.
                </ResultNoTy>
            );
        }
        return (<div>
            {results.tickers.filter(result => result.active === true && result.currency === 'USD').map((result, index) => {
                return (
                    <Grid
                        item
                        sm={12}
                        key={index}
                        onClick={() => history.push(`/search/quote?symb=${result.ticker}`)}
                    >
                        <Paper className={classes.paper}>
                            <ResultNameTy>
                                {result.name}
                            </ResultNameTy>
                            <ResultSybTy>
                                {result.ticker}
                            </ResultSybTy>
                            <ResultExTy>
                                {result.primaryExch}
                            </ResultExTy>
                        </Paper>
                    </Grid>
                )
            })}
        </div>)

    }

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Header>SYMBOL/COMPANY MATCHES</Header>
                    <Grid
                        container
                        spacing={1}
                        direction='column'
                        justify='flex-start'
                        alignItems='left'
                    >
                        <Grid item sm={12}>
                            {this.resultCount()}
                        </Grid>
                        {this.renderResult()}
                    </Grid>
                </main>
            </React.Fragment>
        )
    }
};

SearchResult.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        searchResult: state.symbSearch.result,
    }
}

export default withStyles(styles)(
    connect(
        mapStateToProps,
        null
    )(SearchResult));