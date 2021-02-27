import {
    BUSINESS_NEWS,
    DARK_MODE, DRAWER_TOGGLE, OPEN_MODAL, CLOSE_MODAL,
    FETCH_HOMESTOCK, FETCH_INDICES, FETCH_DAYCHART, ERROR,
    FETCH_SSQUOTE, FETCH_SSSTAT, FETCH_SSNEWS, SEARCH_SYMBOL
} from './types';
import businessNews from '../apis/nytAPI';
import ssNews from '../apis/marketauxAPI';
import IEX from '../apis/iexAPI';
import FM from '../apis/financialModelingAPI'
import Polygon from '../apis/polygonioAPI'
import history from '../history';

import { fetchNewsError } from './error'


export const fetchBusinessNews = () => async dispatch => {
    const response = await businessNews.get('topstories/v2/business.json', {
        params: {
            'api-key': process.env.REACT_APP_API_KEY_BUSINESSNEWS
        }
    }).catch(
        dispatch({ type: BUSINESS_NEWS, payload: fetchNewsError })
    )

    dispatch({ type: BUSINESS_NEWS, payload: response.data.results })
};

export const darkModeOn = (isDarkModeOn) => {
    localStorage.setItem('darkMode', isDarkModeOn);
    return {
        type: DARK_MODE,
        isDarkModeOn
    }
};


export const handleDrawerToggle = (isDrawerOpen) => {

    return {
        type: DRAWER_TOGGLE,
        isDrawerOpen
    }
};

export const handleModalOpen = (index) => {
    return {
        type: OPEN_MODAL,
        payload: index
    }
};

export const handleModalClose = () => {
    return {
        type: CLOSE_MODAL
    }
}

export const fetchHomeStock = () => async dispatch => {
    function fetchMarketList(list) {
        return IEX.get(`/stock/market/list/${list}`, {
            params: {
                token: process.env.REACT_APP_API_KEY_IEX1,
            }
        })
    }
    const gainers = await fetchMarketList('gainers')
    const losers = await fetchMarketList('losers')
    const mostactive = await fetchMarketList('mostactive')

    dispatch({
        type: FETCH_HOMESTOCK, payload: {
            gainers: gainers,
            losers: losers,
            active: mostactive,
        }
    })
};

export const fetchIndices = () => async dispatch => {
    const resIndices = await FM.get('api/v3/quote/%5EGSPC,%5EDJI,%5EIXIC', {
        params: {
            apikey: process.env.REACT_APP_API_KEY_FM,
        }
    })

    dispatch({
        type: FETCH_INDICES,
        payload: resIndices.data,
    })
}

export const fetchDayChart = (symb) => async dispatch => {
    const resDayChart = await IEX.get(`/stock/${symb}/chart/3y`, {
        params: {
            token: process.env.REACT_APP_API_KEY_IEX2,
        }
    });

    dispatch({
        type: FETCH_DAYCHART,
        payload: {
            dayChart: resDayChart.data,
        }
    })
};

export const fetchSSQuote = (symb) => async dispatch => {
    const resQuote = await IEX.get(`/stock/${symb}/quote`, {
        params: {
            token: process.env.REACT_APP_API_KEY_IEX3,
        }
    }).catch(err => {
        if (err.response) {
            dispatch({
                type: ERROR,
                payload: err.response,
            })
            history.push('/error')
        }
    })

    if (resQuote !== undefined) {
        dispatch({
            type: FETCH_SSQUOTE,
            payload: resQuote.data,
        })
    }
}

export const fetchSSStat = (symb) => async dispatch => {

    const resStat = await IEX.get(`/stock/${symb}/stats`, {
        params: {
            token: process.env.REACT_APP_API_KEY_IEX2,
        }
    }).catch(err => {
        if (err.response) {
            dispatch({
                type: ERROR,
                payload: err.response,
            })
            history.push('/error')
        }
    })

    if (resStat !== undefined) {
        dispatch({
            type: FETCH_SSSTAT,
            payload: resStat.data,
        })
    }
}

export const fetchSSNews = (symb) => async dispatch => {
    const response = await ssNews.get('/news/all', {
        params: {
            symbols: symb,
            filter_entities: true,
            api_token: process.env.REACT_APP_API_KEY_SSNEWS,
        }
    }).catch(
        dispatch({ type: FETCH_SSNEWS, payload: fetchNewsError })
    )
    if (response !== undefined) {
        dispatch({ type: FETCH_SSNEWS, payload: response.data.data })
    }
};

export const searchSymb = (symb) => async dispatch => {
    const resSearch = await Polygon.get('/v2/reference/tickers', {
        params: {
            sort: 'ticker',
            '?type': 'cs',
            search: `${symb}`,
            market: 'stocks',
            locale: 'us',
            active: true,
            apiKey: process.env.REACT_APP_API_KEY_POLYGON,
        }
    })
    dispatch({
        type: SEARCH_SYMBOL,
        payload: resSearch.data,
    })
};

