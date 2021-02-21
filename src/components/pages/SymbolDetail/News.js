import React from 'react';
import { connect } from 'react-redux'
import { Grid } from '@material-ui/core';
import { fetchSSNews, handleModalOpen } from '../../../actions';
import NewsCard from '../News/NewsCard';
import NewsPortal from '../News/NewsPortal';


class SSNews extends React.Component {

    componentDidMount() {
        this.props.fetchSSNews(this.props.symb);
    }

    renderNews() {
        const news = this.props.news;
        if (!news || news === null) {
            return (
                <div>
                    Loading ...
                </div>)
        }
        return (
            <React.Fragment>
                {news.map((item, index) => {
                    return (
                        <div key={index} onClick={() => { this.props.handleModalOpen(index) }} >
                            <NewsCard
                                newsTitle={item.title}
                                newsSource={item.source.name}
                                newsImg={item.urlToImage}
                                pTime={item.publishedAt}
                            />

                        </div>
                    )
                })}
                <NewsPortal articles={news} />
            </React.Fragment >
        )
    }

    render() {
        return (
            <div>
                <Grid
                    container
                    spacing={1}
                    direction='column'
                    justify='flex-start'
                    alignItems='center'
                >
                    <Grid item >

                        {this.renderNews()}

                    </Grid>
                </Grid>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        news: state.stock.resNews,
    }
}

export default connect(
    mapStateToProps,
    { fetchSSNews, handleModalOpen }
)(SSNews);