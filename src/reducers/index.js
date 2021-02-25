import { combineReducers } from 'redux';

import fetchNewsDataReducer from './fetchNewsDataReducer';
import themeReducer from './themeReducer';
import drawerReducer from './drawerReducer';
import modalReducer from './modalReducer';
import fetchStockReducer from './fetchStockReducer';
import indicesReducer from './indicesReducer';
import stockHomeReducer from './stockHomeReducer';
import searchSymbolReducer from './searchSymbolReducer';
import errorReducer from './errorReducer';

export default combineReducers(
    {
        fetchData: fetchNewsDataReducer,
        theme: themeReducer,
        isDrawerOpen: drawerReducer,
        modal: modalReducer,
        stock: fetchStockReducer,
        indices: indicesReducer,
        stockHome: stockHomeReducer,
        symbSearch: searchSymbolReducer,
        error: errorReducer,
    }
)
