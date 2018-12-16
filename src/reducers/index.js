import {combineReducers} from 'redux';
import cat from './cat';
import fav from './fav';

const rootReducer = combineReducers({
    cat,
    fav
})

export default rootReducer;