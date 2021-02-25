import {
    BUSINESS_NEWS,
    DARK_MODE, DRAWER_TOGGLE, OPEN_MODAL, CLOSE_MODAL,
    FETCH_HOMESTOCK, FETCH_INDICES, FETCH_DAYCHART,
    FETCH_SSQUOTE, FETCH_SSSTAT, FETCH_SSNEWS, ERROR, SEARCH_SYMBOL
} from './types';
import businessNews from '../apis/newsAPI';
import IEX from '../apis/iexAPI';
import FM from '../apis/financialModelingAPI'
import Polygon from '../apis/polygonioAPI'
import history from '../history';


export const fetchBusinessNews = () => async dispatch => {
    const response = await businessNews.get('/top-headlines', {
        params: {
            sources: 'business-insider,the-wall-street-journal',
            apiKey: `${process.env.REACT_APP_API_KEY_businessNews}`
        }
    });
    dispatch({ type: BUSINESS_NEWS, payload: response.data.articles })
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
    const resGain = await IEX.get('/stock/market/list/gainers', {
        params: {
            token: `${process.env.REACT_APP_API_KEY_IEX1}`,
        }
    }).catch(err => {
        if (err.response) {
            // client received an error response (5xx, 4xx)
        } else if (err.request) {
            // client never received a response, or request never left
        } else {
            // anything else
        }
    });
    const resLose = await IEX.get('/stock/market/list/losers', {
        params: {
            token: `${process.env.REACT_APP_API_KEY_IEX1}`,
        }
    });
    const resActive = await IEX.get('/stock/market/list/mostactive', {
        params: {
            token: `${process.env.REACT_APP_API_KEY_IEX1}`,
        }
    });


    dispatch({
        type: FETCH_HOMESTOCK, payload: {
            gainers: resGain,
            losers: resLose,
            active: resActive,
        }
    })
};

export const fetchIndices = () => async dispatch => {
    const resIndices = await FM.get('api/v3/quote/%5EGSPC,%5EDJI,%5EIXIC', {
        params: {
            apikey: `${process.env.REACT_APP_API_KEY_FM}`,
        }
    });

    dispatch({
        type: FETCH_INDICES,
        payload: resIndices.data,
    })
}

export const fetchDayChart = (symb) => async dispatch => {
    const resDayChart = await IEX.get(`/stock/${symb}/chart/3y`, {
        params: {
            token: `${process.env.REACT_APP_API_KEY_IEX2}`,
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
            token: `${process.env.REACT_APP_API_KEY_IEX3}`,
        }
    }).catch(err => {
        if (err.response) {
            dispatch({
                type: ERROR,
                payload: err.response,
            })
            history.push('/error')

        } else if (err.request) {
            history.push('/')
        } else {
            history.push('/')
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
            token: `${process.env.REACT_APP_API_KEY_IEX2}`,
        }
    }).catch(err => {
        if (err.response) {
            dispatch({
                type: ERROR,
                payload: err.response,
            })
            history.push('/error')

        } else if (err.request) {
            history.push('/')
        } else {
            history.push('/')
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
    const response = await businessNews.get('/everything', {
        params: {
            q: symb,
            sortBy: 'publishedAt',
            language: 'en',
            apiKey: `${process.env.REACT_APP_API_KEY_businessNews}`
        }
    });
    dispatch({ type: FETCH_SSNEWS, payload: response.data.articles })
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
            apiKey: `${process.env.REACT_APP_API_KEY_Polygon}`,
        }
    })
    dispatch({
        type: SEARCH_SYMBOL,
        payload: resSearch.data,
    })
};


