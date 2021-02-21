import React from 'react';

import TimeAgo from 'react-timeago'
import PropTypes from 'prop-types';
import { createMuiTheme, responsiveFontSizes, ThemeProvider, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardContent, CardMedia, Typography } from '@material-ui/core';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const styles = (theme) => ({
    root: {
        display: 'flex',
        borderRadius: '1px',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    cardContent: {
        flex: '1 0 auto',
    },
    cover: {
        WebkitMaskImage: '-webkit-gradient(linear, left top, right top, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))',
        MaskImage: 'linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))',
        [theme.breakpoints.up('md')]: {
            width: '220px',
            display: 'block',
        },
        [theme.breakpoints.up('sm')]: {
            width: '110px',
            display: 'block',
        },
        display: 'none',
    },
});


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

// const mapStateToProps = (state) => {
//     return {  }
// }

export default withStyles(styles)(NewsCard);