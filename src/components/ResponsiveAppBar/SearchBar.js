import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import history from '../../history'
import { searchBarStyles } from './AppBarStyles'
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { searchSymb } from '../../actions'

const SearchBar = () => {

    const [input, setInput] = useState('');

    const dispatch = useDispatch();

    const classes = searchBarStyles();
    const handleKeyPress = e => {
        if (e.key === 'Enter' && input !== '' && input !== undefined) {
            dispatch(searchSymb(input));
            history.push(`/search`)
        }
    }
    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>

            <InputBase
                placeholder="SEARCH..."
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={e => {
                    setInput(e.target.value)
                }}
                // value={this.props.inValue}
                onKeyPress={handleKeyPress}
            />

        </div>)
};

export default SearchBar;