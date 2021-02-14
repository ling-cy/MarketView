import React from 'react';
import { connect } from 'react-redux';

import TimeAgo from 'react-timeago';

import PropTypes from 'prop-types';
import { createMuiTheme, responsiveFontSizes, ThemeProvider, withStyles } from '@material-ui/core/styles';
import {
    Typography, Modal, Card, CardContent, CardMedia, Divider
} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import RedditIcon from '@material-ui/icons/Reddit';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TelegramIcon from '@material-ui/icons/Telegram';
import {
    FacebookShareButton, LinkedinShareButton, RedditShareButton,
    TwitterShareButton, WhatsappShareButton, TelegramShareButton
} from 'react-share';

import { handleModalClose } from '../../actions'


let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const styles = (theme) => ({

    modalContent: {
        position: 'absolute',
        [theme.breakpoints.up('650')]: {
            width: '650px',
            display: 'block',
        },
        width: '90%',
        display: 'block',
        backgroundColor: theme.palette.background.paper,
        border: '0px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(0, 0, 2),
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        outline: 0,
        height: '80%',
        maxHeight: '600px'
    },
    cover: {
        WebkitMaskImage: '-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))',
        MaskImage: 'linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))',
    },
    section1: {
        margin: theme.spacing(0, 2, 2),
    },
    section2: {
        margin: theme.spacing(2),
    },
    detail: {
        color: '#8d99ae',
    },
    cardContent: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    shareIcon: {
        marginLeft: '7px',
    },
});

class NewsPortal extends React.Component {
    render() {
        const { classes } = this.props;
        const article = this.props.articles[this.props.modalState.index];
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
                        image={article.urlToImage}
                        title='Contemplative Reptile'
                        className={classes.cover}
                    />
                    <CardContent className={classes.cardContent}>
                        <ThemeProvider theme={theme}>
                            <div className={classes.section1}>
                                <Typography gutterBottom variant='h5' component='h2'>
                                    <b>{article.title}</b>
                                </Typography>
                                <Typography className={classes.detail} variant='body2' >
                                    <b>{article.author}</b> - {article.source.name}<br />
                                    <TimeAgo date={article.publishedAt} />
                                </Typography>
                            </div>
                            <Divider variant='middle' />
                            <div className={classes.section2}>
                                <Typography variant='body2' component='p'>
                                    {article.description}
                                </Typography>
                                <br />
                                <Typography onClick={() => window.open(`${article.url}`, '_blank')}
                                    style={{ textAlign: 'right' }} variant='body2' >
                                    <i> (Read More...) </i>
                                </Typography>
                            </div>

                            <FacebookShareButton url={article.url} className={classes.shareIcon}>
                                <FacebookIcon />
                            </FacebookShareButton>
                            <LinkedinShareButton url={article.url} className={classes.shareIcon}>
                                <LinkedInIcon />
                            </LinkedinShareButton>
                            <RedditShareButton url={article.url} className={classes.shareIcon}>
                                <RedditIcon />
                            </RedditShareButton>
                            <TwitterShareButton url={article.url} className={classes.shareIcon}>
                                <TwitterIcon />
                            </TwitterShareButton>
                            <WhatsappShareButton url={article.url} className={classes.shareIcon}>
                                <WhatsAppIcon />
                            </WhatsappShareButton>
                            <TelegramShareButton url={article.url} className={classes.shareIcon}>
                                <TelegramIcon />
                            </TelegramShareButton>

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

NewsPortal.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(
    connect(
        mapStateToProps,
        { handleModalClose }
    )(NewsPortal));