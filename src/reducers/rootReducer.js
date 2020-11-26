import {combineReducers} from 'redux';

import usersData from './usersData';
import newUser from './newUserGeneration';

const rootReducer = combineReducers({
    usersData,
    newUser
})

export default rootReducer;