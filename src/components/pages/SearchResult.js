import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Typography, Grid, Paper } from '@material-ui/core';
import history from '../../history'



const styles = (theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        padding: theme.spacing(3),
    },
    paper: {
        margin: theme.spacing(0, 0, 1, 0),
        padding: theme.spacing(1, 1, 4, 2),
        borderLeft: 'solid',
        borderWidth: '4px',
    }
});

const Header = withStyles((theme) => ({
    root: {
        fontWeight: 1000,
        fontSize: '28px',
        letterSpacing: '-1px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '20px',
            letterSpacing: '-1.5px',
        },
    },
}))(Typography);

const ResultNoTy = withStyles(() => ({
    root: {
        fontWeight: 400,
        fontSize: '14px',
        letterSpacing: '-0.5px',
        color: '#898989',
        marginTop: '-2px',
        marginBottom: '3px',
    },
}))(Typography);

const ResultNameTy = withStyles(() => ({
    root: {
        fontWeight: 400,
        fontSize: '17px',
        letterSpacing: '-0.5px',
        color: '#898989',
        marginTop: '1px',
        marginBottom: '-1px',
    },
}))(Typography);

const ResultSybTy = withStyles(() => ({
    root: {
        fontWeight: 400,
        fontSize: '17px',
        letterSpacing: '-0.5px',
        color: 'primary',
        marginTop: '-1px',
        marginBottom: '1px',
        display: 'inline',
        float: 'left',
    },
}))(Typography);

const ResultExTy = withStyles(() => ({
    root: {
        fontWeight: 400,
        fontSize: '12px',
        letterSpacing: '-0.5px',
        color: '#468faf',
        marginTop: '3px',
        display: 'inline',
        float: 'right',
    },
}))(Typography);

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
                        We have got {results.tickers.length} results.
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
        console.log(results)
        if (results === null || !results) {
            return null;
        }
        // if (results.tickers.filter(result => result.active === 'true').length === 0) {
        //     return <Typography>There's no result</Typography>
        // }
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