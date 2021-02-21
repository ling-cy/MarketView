import React from 'react';
import { useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Tab from './Tab';
import Header from './Header';


const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        padding: theme.spacing(1),
    },
    Container: {
        root: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }
    }
}));


const StockDetail = () => {
    const classes = useStyles();
    const { search } = useLocation();
    const searchParams = new URLSearchParams(search);
    const symbol = searchParams.get('symb')


    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Container className={classes.container}>
                <Header symb={symbol} />
                <Tab symb={symbol} />
            </Container>
        </main>
    );
};

export default StockDetail;