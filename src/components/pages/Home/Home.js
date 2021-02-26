import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Grid, CircularProgress, Typography } from '@material-ui/core';

import { homeStyles } from './homeStyles'
import { handleModalOpen, handleModalClose } from '../../../actions';
import NewsCard from '../News/NewsCard';
import NewsPortal from '../News/NewsPortal';
import StockTable from './StockTable'
import IndexBox from './IndexBox'

class Home extends React.Component {

    renderBusinessNews() {
        const articles = this.props.businessNews.articles;
        if (!articles || articles === null) {
            return (<Typography style={{ textAlign: 'center' }}>Loading...</Typography>)
        } if (articles.status === 'error') {
            return <Typography style={{ textAlign: 'center' }}>{articles.response}</Typography>
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

    renderStockPanel() {
        const { classes } = this.props;
        const stockPanelContent = [
            {
                name: 'Most Actives',
                data: this.props.stockHome.active,
            }, {
                name: 'Gainers',
                data: this.props.stockHome.gainers,
            }, {
                name: 'Losers',
                data: this.props.stockHome.losers,
            }
        ];
        return (

            <Grid
                container
                direction='column'
                justify='flex-start'
                alignItems='center'
            >
                <Typography variant="h6" className={classes.header}>What's Moving</Typography>
                {stockPanelContent.map((panel, index) => {
                    const data = panel.data;
                    if (!data || data === null) {
                        return (
                            <Paper className={classes.paper}>
                                <div className={classes.cir} key={index}>
                                    <CircularProgress />
                                </div>
                            </Paper>
                        )
                    }
                    return (
                        <Grid item sm={12} xs={12} className={classes.stockPanel}>
                            <Paper className={classes.paper}>
                                <Typography className={classes.spHeader}>Stocks: {panel.name}</Typography>
                                <StockTable
                                    stockSymbols={data}
                                    key={index}
                                />
                            </Paper>
                        </Grid>
                    )
                })}
            </Grid>

        )
    }


    renderIndices() {
        const indices = this.props.indices;
        if (!indices || indices === null) {
            return (<Typography style={{ textAlign: 'center' }}>Loading...</Typography>)
        }
        //the error response is not an array so its length is undefined
        if (indices.length === undefined) {
            return null;
        }
        return (
            <Grid
                container
                direction='row'
                justify='space-around'
                alignments='flex-start'
            >
                {indices.map((data, index) => {
                    return (
                        <Grid item xs={12} sm={4} key={index}>
                            <IndexBox
                                marketIndex={data}
                            />
                        </Grid>
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
                <Grid className={classes.masterGrid}
                    container
                    spacing={1}
                    direction='column'
                    justify='flex-start'
                    alignItems='center'
                >
                    <Grid item xs={12} className={classes.panel}>
                        <Paper className={classes.paper}>
                            {this.renderIndices()}
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Grid container spacing={1} className={classes.panel}>
                            <Grid item sm={7} xs={12} className={classes.newsPanel}>
                                <Typography variant="h6" className={classes.header}>Latest Business News</Typography>
                                <Paper className={classes.paper}>
                                    {this.renderBusinessNews()}
                                </Paper>
                            </Grid>
                            <Grid item sm={5} xs={12}>
                                {this.renderStockPanel()}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </main>
        )
    }
};

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        businessNews: state.fetchNews,
        modalState: state.modal,
        indices: state.indices.indices,
        stockHome: state.stockHome,
    }
}

export default withStyles(homeStyles)(
    connect(
        mapStateToProps,
        { handleModalOpen, handleModalClose }
    )(Home));
