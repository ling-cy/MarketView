import React from 'react';
import { connect } from 'react-redux'

import history from '../../history'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { fade } from '@material-ui/core/styles';

import { inputSearchBar, searchSymb } from '../../actions'

const styles = theme => ({
    //search bar
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.black, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '200px',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
});


class SearchBar extends React.Component {

    render() {
        const { classes } = this.props;
        const handleKeyPress = e => {
            if (e.key === 'Enter' && this.props.inValue !== '') {
                this.props.searchSymb(this.props.inValue)
                history.push(`/search`)
            }
        }
        return (
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>

                <InputBase
                    placeholder="Search for symbols…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={e => {
                        this.props.inputSearchBar(e.target.value)
                    }}
                    // value={this.props.inValue}
                    onKeyPress={handleKeyPress}
                />

            </div>)
    }
};

SearchBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return { inValue: state.inText.inputValue }
}

export default withStyles(styles)(
    connect(
        mapStateToProps,
        { inputSearchBar, searchSymb }
    )(SearchBar));