import toggleReducer from '../reducers/isToggle';

import {combineReducers} from 'redux';

const Reducers = combineReducers({
    menuOpen: toggleReducer
})

export default Reducers;