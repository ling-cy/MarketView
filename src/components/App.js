import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { fetchBusinessNews, fetchHomeStock, fetchIndices } from '../actions'


import ResponsiveAppBar from './ResponsiveAppBar/ResponsiveAppBar';
import Home from './pages/Home/Home';
import Search from './pages/SearchResult/SearchResult';
import SymbolDetail from './pages/SymbolDetail/SymbolDetail';
import Footer from './footer/footer'

import Error from './pages/errors/Error';

const styles = () => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    content: {
        flexGrow: 1,
    },
});

class App extends React.Component {

    componentDidMount() {
        this.props.fetchBusinessNews();
        this.props.fetchHomeStock();
        this.props.fetchIndices();
    }

    render() {
        const { classes } = this.props;
        const theme = createMuiTheme({
            palette: {
                type: this.props.darkTheme === true ? 'dark' : 'light',
            },
        });



        return (
            <ThemeProvider theme={theme}>
                <div className={classes.root}>
                    <div className={classes.content}>
                        <ResponsiveAppBar />
                        <Switch>
                            <Route path='/' exact component={Home} />
                            <Route path='/search' exact component={Search} />
                            <Route path='/search/:symb' component={SymbolDetail} />
                            <Route path='/error' component={Error} />
                            <Route component={Error} />
                        </Switch>
                    </div>
                    <Footer />
                </div >
            </ThemeProvider>
        )
    }
};

App.propTypes = {
    classes: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return { darkTheme: state.theme.darkMode }
}

export default withStyles(styles)(
    connect(
        mapStateToProps,
        { fetchBusinessNews, fetchHomeStock, fetchIndices }
    )(withRouter(App)));