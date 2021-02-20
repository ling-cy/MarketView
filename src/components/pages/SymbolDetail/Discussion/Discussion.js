import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';
import useScript from '../../../../hooks/useScript';
import innerHTML from './WidgetConfig';

const Discussion = (props) => {

    const { darkMode } = useSelector(state => ({
        darkMode: state.theme.darkMode,
    }));

    const { width, height } = useWindowDimensions();

    const innerHTMLText = innerHTML(darkMode, props.symb, width, height)

    useScript(
        'https://api.stocktwits.com/addon/widget/2/widget-loader.min.js',
        'text/javascript',
        innerHTMLText,
        'stocktwits-widget-news',
        'stocktwits'
    );

    return (

        <Grid
            container
            spacing={1}
            direction='column'
            justify='flex-start'
            alignItems='center'
        >
            <Grid item >
                <div id='stocktwits'>
                    {/* <div id='stocktwits-widget-news'></div> */}
                </div>
            </Grid>
        </Grid>

    )

};

export default Discussion;