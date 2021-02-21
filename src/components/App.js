import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { fetchBusinessNews, fetchHomeStock, fetchIndices } from '../actions'


import ResponsiveAppBar from './ResponsiveAppBar';
import Home from './pages/Home/Home';
import Search from './pages/SearchResult';
import SymbolDetail from './pages/SymbolDetail/SymbolDetail';

import PageNotFound from './errors/PageNotFound';
import FetchError from './errors/FetchError';

const styles = () => ({
    root: {
        display: 'block',
    },
});

class App extends React.Component {

    componentDidMount() {
        this.props.fetchBusinessNews();
        this.props.fetchHomeStock();
        this.props.fetchIndices();
        console.log(localStorage.getItem('darkMode'))
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
                    <ResponsiveAppBar />
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/search' exact component={Search} />
                        <Route path='/search/:symb' component={SymbolDetail} />
                        <Route path='/error' component={FetchError} />
                        <Route component={PageNotFound} />
                    </Switch>
                </div >
            </ThemeProvider>
        )
    }
};

App.propTypes = {
    classes: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return { darkTheme: state.theme.darkMode }
}

export default withStyles(styles)(
    connect(
        mapStateToProps,
        { fetchBusinessNews, fetchHomeStock, fetchIndices }
    )(withRouter(App)));