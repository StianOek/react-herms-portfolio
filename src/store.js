import { createStore, combineReducers } from 'redux';
import toggleReducer from './reducers/isToggle';

const reducers = combineReducers({toggleReducer});

export default createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());