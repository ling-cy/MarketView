import React from 'react';

import TimeAgo from 'react-timeago'
import PropTypes from 'prop-types';
import { ThemeProvider, withStyles } from '@material-ui/core/styles';
import { CardContent, CardMedia, Typography, Card } from '@material-ui/core';
import theme, { styles } from './NewsCardStyles'



class NewsCard extends React.Component {

    handleOnClick = () => {
        this.props.handleModal(true)

    }

    render() {
        const { classes } = this.props;
        return (
            <Card className={classes.root}>
                <CardMedia
                    component="img"
                    alt="News Photo"
                    className={classes.cover}
                    image={this.props.newsImg}
                    title="news photo"
                />
                <div className={classes.details}>
                    <ThemeProvider theme={theme}>
                        <CardContent className={classes.cardContent}>
                            <Typography variant="caption" style={{ color: '#9b9b9b' }}>
                                {this.props.newsSource} - <TimeAgo date={this.props.pTime} />
                            </Typography><br />
                            <Typography component="h6">
                                <b>{this.props.newsTitle}</b>
                            </Typography>
                        </CardContent>
                    </ThemeProvider>
                </div>
            </Card>
        )
    }
};

NewsCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewsCard);