import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './NewsPortalStyles';
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
import PropTypes from 'prop-types';


class NewsPortalShare extends React.Component {
    render() {
        const { classes } = this.props;
        const url = this.props.article.url
        return (
            <React.Fragment>
                <FacebookShareButton url={url} className={classes.shareIcon}>
                    <FacebookIcon />
                </FacebookShareButton>
                <LinkedinShareButton url={url} className={classes.shareIcon}>
                    <LinkedInIcon />
                </LinkedinShareButton>
                <RedditShareButton url={url} className={classes.shareIcon}>
                    <RedditIcon />
                </RedditShareButton>
                <TwitterShareButton url={url} className={classes.shareIcon}>
                    <TwitterIcon />
                </TwitterShareButton>
                <WhatsappShareButton url={url} className={classes.shareIcon}>
                    <WhatsAppIcon />
                </WhatsappShareButton>
                <TelegramShareButton url={url} className={classes.shareIcon}>
                    <TelegramIcon />
                </TelegramShareButton>
            </React.Fragment>
        )
    }
};

NewsPortalShare.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewsPortalShare);
