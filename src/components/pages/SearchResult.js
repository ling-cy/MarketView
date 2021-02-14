import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import history from '../../history'


const drawerWidth = 240;

const styles = (theme) => ({
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
});

class SearchResult extends React.Component {

    renderResult() {
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
                    <Typography
                        key={index}
                        onClick={() => history.push(`/search/quote?symb=${result.ticker}`)}
                    >
                        {result.ticker} ({result.name})
                    </Typography>
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
                    <h1>Search Result</h1>
                    {this.renderResult()}
                </main>
            </React.Fragment>
        )
    }
};

SearchResult.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return { searchResult: state.symbSearch.result }
}

export default withStyles(styles)(
    connect(
        mapStateToProps,
        null
    )(SearchResult));