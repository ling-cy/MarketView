import React from 'react';
import { connect } from 'react-redux';
import TimeAgo from 'react-timeago';

import PropTypes from 'prop-types';
import { ThemeProvider, withStyles } from '@material-ui/core/styles';
import {
    Typography, Modal, Card, CardContent, CardMedia, Divider
} from '@material-ui/core';
import NewsPortalShare from '../../News/NewsPortal/NewsPortalShare';
import theme, { styles } from '../../News/NewsPortal/NewsPortalStyles';
import { handleModalClose } from '../../../../actions';


class SSNewsPortal extends React.Component {
    render() {
        const { classes } = this.props;
        const article = this.props.articles[this.props.modalState.index];
        if (!article || article === undefined) {
            return null;
        }
        return (
            <Modal
                open={this.props.modalState.isModalOpen}
                onClose={() => { this.props.handleModalClose() }}
                aria-labelledby='simple-modal-title'
                aria-describedby='simple-modal-description'
            >
                <Card className={classes.modalContent}>

                    <CardMedia
                        component='img'
                        alt='News Image'
                        image={article.image_url}
                        className={classes.cover}
                    />
                    <CardContent className={classes.cardContent}>
                        <ThemeProvider theme={theme}>
                            <div className={classes.section1}>
                                <Typography gutterBottom variant='h5' component='h2'>
                                    <b>{article.title}</b>
                                </Typography>
                                <Typography className={classes.detail} variant='body2' >
                                    <b>{article.source}</b> <br />
                                    <TimeAgo date={article.published_at} />
                                </Typography>
                            </div>
                            <Divider variant='middle' />
                            <div className={classes.section2}>
                                <Typography variant='body2' component='p'>
                                    {article.snippet}
                                </Typography>
                                <br />
                                <Typography onClick={() => window.open(`${article.url}`, '_blank')}
                                    style={{ textAlign: 'right' }} variant='body2' >
                                    <i> (Read More...) </i>
                                </Typography>
                            </div>
                            <NewsPortalShare article={article} />
                        </ThemeProvider>
                    </CardContent>

                </Card>
            </Modal >
        )
    }
};

const mapStateToProps = (state) => {
    return {
        modalState: state.modal,
    }
};

SSNewsPortal.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(
    connect(
        mapStateToProps,
        { handleModalClose }
    )(SSNewsPortal));