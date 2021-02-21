import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { createMuiTheme, responsiveFontSizes, withStyles } from '@material-ui/core/styles';
import { Paper, Grid, CircularProgress, Typography } from '@material-ui/core';


import { handleModalOpen, handleModalClose } from '../../../actions';
import NewsCard from '../News/NewsCard';
import NewsPortal from '../News/NewsPortal';
import StockTable from './StockTable'
import IndexBox from './IndexBox'


let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

// const drawerWidth = 180;

const styles = (theme) => ({
    toolbar: theme.mixins.toolbar,
    // drawerPaper: {
    //     width: drawerWidth,
    // },
    content: {
        // flexGrow: 1,
        padding: theme.spacing(1),
    },
    root: {
        // flexGrow: 1,
    },
    cir: {
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
        padding: theme.spacing(5),
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    modalStyle: {
        position: 'absolute',
        width: '100 %',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        outline: 0,
    },
    stockPanel: {
        // maxWidth: 400,
        minWidth: 300,
    },
    newsPanel: {
        maxWidth: 850,
    },
    indicesPanel: {
        maxWidth: 1250,
    },
    spHeader: {
        fontWeight: '600',
        fontSize: '14px',
        padding: theme.spacing(0, 0, 0, 1),
    },
    paper: {
        margin: theme.spacing(0, 0, 1, 0),
    }
});


class Home extends React.Component {

    renderBusinessNews() {
        const { classes } = this.props;
        const articles = this.props.businessNews.articles;
        if (!articles || articles === null) {
            return (
                <div className={classes.cir}>
                    <CircularProgress />
                </div>)
        }
        return (
            <React.Fragment>
                {articles.map((news, index) => {
                    return (
                        <div key={index} onClick={() => { this.props.handleModalOpen(index) }} >
                            <NewsCard
                                newsTitle={news.title}
                                newsSource={news.source.name}
                                newsImg={news.urlToImage}
                                pTime={news.publishedAt}
                            />

                        </div>
                    )
                })}
                <NewsPortal articles={articles} />
            </React.Fragment >
        )
    }


    renderGainer() {
        const { classes } = this.props;
        const data = this.props.stockHome.gainers;
        if (!data || data === null) {
            return (
                <div className={classes.cir}>
                    <CircularProgress />
                </div>)
        };
        return (
            <StockTable
                stockSymbols={data}
            />
        );
    };

    renderLoser() {
        const { classes } = this.props;
        const data = this.props.stockHome.losers;
        if (!data || data === null) {
            return (
                <div className={classes.cir}>
                    <CircularProgress />
                </div>)
        };
        return (
            <StockTable
                stockSymbols={data}
            />
        );
    };

    renderActive() {
        const { classes } = this.props;
        const data = this.props.stockHome.active;
        if (!data || data === null) {
            return (
                <div className={classes.cir}>
                    <CircularProgress />
                </div>)
        };
        return (
            <StockTable
                stockSymbols={data}
            />
        );
    };

    renderIndices() {
        const { classes } = this.props;
        const indices = this.props.indices;
        console.log(indices)
        if (!indices || indices === null) {
            return (
                <div className={classes.cir}>
                    <CircularProgress />
                </div>)
        };
        return (
            <Grid
                container
                direction='row'
                justify='space-evenly'
                alignments='flex-start'
            >
                {indices.map((data, index) => {
                    return (
                        <div key={index}>
                            <IndexBox
                                marketIndex={data}
                            />
                        </div>
                    )
                })}
            </Grid>
        );
    };

    render() {
        const { classes } = this.props;
        return (
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <div className={classes.root}>
                    <Grid
                        container
                        spacing={1}
                        direction='column'
                        justify='flex-start'
                        alignItems='center'
                    >
                        <Grid item xs={12} className={classes.indicesPanel}>
                            <Paper className={classes.paper}>
                                {this.renderIndices()}
                            </Paper>
                        </Grid>
                        <Grid item container spacing={1} className={classes.indicesPanel}>
                            <Grid item className={classes.newsPanel}>
                                <Typography variant="h5"><b>Latest</b></Typography>
                                <Paper className={classes.paper}>
                                    {this.renderBusinessNews()}
                                </Paper>
                            </Grid>
                            <Grid item className={classes.stockPanel}>
                                <Typography variant="h5"><b>What's Moving</b></Typography>
                                <Paper className={classes.paper}>
                                    <Typography className={classes.spHeader}>Stocks: Most Actives</Typography>
                                    {this.renderActive()}
                                </Paper>
                                <Paper className={classes.paper}>
                                    <Typography className={classes.spHeader}>Stocks: Gainers</Typography>
                                    {this.renderGainer()}
                                </Paper>
                                <Paper className={classes.paper}>
                                    <Typography className={classes.spHeader}>Stocks: Losers</Typography>
                                    {this.renderLoser()}
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </main>
        )
    }
};

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        businessNews: state.fetchData,
        modalState: state.modal,
        indices: state.indices.indices,
        stockHome: state.stockHome,
    }
}

export default withStyles(styles)(
    connect(
        mapStateToProps,
        { handleModalOpen, handleModalClose }
    )(Home));



    // this.props.businessNews.articles.slice(0, 3).map(news => {