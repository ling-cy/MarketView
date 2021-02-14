import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';
import inputValueReducer from './inputValueReducer';
import fetchNewsDataReducer from './fetchNewsDataReducer';
import themeReducer from './themeReducer';
import drawerReducer from './drawerReducer';
import modalReducer from './modalReducer';
import fetchStockReducer from './fetchStockReducer';
import indicesReducer from './indicesReducer';
import stockHomeReducer from './stockHomeReducer';
import searchSymbolReducer from './searchSymbolReducer';

export default combineReducers(
    {
        auth: authReducer,
        inText: inputValueReducer,
        fetchData: fetchNewsDataReducer,
        theme: themeReducer,
        isDrawerOpen: drawerReducer,
        modal: modalReducer,
        stock: fetchStockReducer,
        indices: indicesReducer,
        stockHome: stockHomeReducer,
        symbSearch: searchSymbolReducer,
    }
)

// 680632301237 - cv0c50fo1ub6g9lk4vvbc9tu0fh27mqf.apps.googleusercontent.com

// BvZmB0c6xmhN40ZUbzHh2 - zz