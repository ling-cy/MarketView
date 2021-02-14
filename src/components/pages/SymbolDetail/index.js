import React from 'react';
import { useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Tab from './Tab';
import Header from './Header';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(1),
    },
}));


const StockDetail = () => {
    const classes = useStyles();
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const symbol = searchParams.get('symb')


    return (
        <React.Fragment>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Header symb={symbol} />
                <Tab symb={symbol} />
            </main>
        </React.Fragment>
    );
};

export default StockDetail;