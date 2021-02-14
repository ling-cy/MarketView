import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
    Table, TableBody, TableCell, TableRow
} from '@material-ui/core';

const styles = (theme) => ({
    table: {
        minWidth: 170,
    },

});

const StyledTableCell = withStyles(() => ({
    root: {
        paddingBottom: 1,
        paddingTop: 1,
        fontSize: '13px',
        borderTop: 'none',
        borderBottom: 'none',
        borderLeft: 'solid',
        borderWidth: '2px',
        fontWeight: '600',
    },
}))(TableCell);

const textColor = (value) => {
    if (value > 0) {
        return '#2a9d8f';
    } if (value < 0) {
        return '#e63946';
    }
    return 'black';
};


class Quote extends React.Component {

    render() {
        return (
            <div>
                Quote
            </div>
        )
    }
};



export default withStyles(styles)(Quote);