import {createStore, combineReducers, applyMiddleware} from 'redux';
import {ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from 'modules/App/reducers';


const initStore = (history, initialState) => {

    let middleware = routerMiddleware(history);

    return createStore(
        combineReducers({
            ...reducers,
            router: routerReducer
        }),
        initialState,
        applyMiddleware(thunk, middleware)
    );
};

export default initStore;
