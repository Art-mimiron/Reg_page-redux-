import {combineReducers} from 'redux';

import usersData from './usersReducer';
import newUser from './newUserReducer';
import searchBar from './searchbarReducer';
import chuckJokes from './norrisJokeReducer';

const rootReducer = combineReducers({
    usersData,
    newUser,
    searchBar,
    chuckJokes
})

export default rootReducer;