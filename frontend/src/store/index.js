import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import sessionReducer from './session';
import cardsReducer from './card';
import searchBarTextReducer from './searchBar';
import cartItemReducer from './cart';
import commentsReducer from './comment';
import userReducer from './user';

export const rootReducer = combineReducers({
    session: sessionReducer,
    cards: cardsReducer,
    searchBar: searchBarTextReducer,
    cartItems: cartItemReducer,
    comments: commentsReducer,
    users: userReducer
});

let enhancer;

if(process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer, preloadedState, enhancer);
}

export default configureStore;