import React from 'react';
import { connect } from 'react-redux'
import { Grid, Typography } from '@material-ui/core';
import { handleModalOpen } from '../../../../actions';
import NewsCard from '../../News/NewsCard/NewsCard';
import NewsPortal from './SSNewsPortal';


class SSNews extends React.Component {


    renderNews() {
        const { news } = this.props;
        if (!news || news === null) {
            return <Typography style={{ textAlign: 'center' }}>Loading...</Typography>
        } if (news.status === 'error') {
            return <Typography style={{ textAlign: 'center' }}>{news.response}</Typography>
        } if (news === []) {
            return <Typography style={{ textAlign: 'center' }}>No relevant news...</Typography>
        }
        return (
            <React.Fragment>
                {news.map((item, index) => {
                    return (
                        <div key={index} onClick={() => { this.props.handleModalOpen(index) }} >
                            <NewsCard
                                newsTitle={item.title}
                                newsSource={item.source}
                                newsImg={item.image_url}
                                pTime={item.published_at}
                            />
                        </div>
                    )
                })}
                <NewsPortal
                    articles={news}
                />
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
        modalState: state.modal,
    }
}

export default connect(
    mapStateToProps,
    { handleModalOpen }
)(SSNews);