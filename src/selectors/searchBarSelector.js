import { createStore } from 'redux';
import { createSelector } from 'reselect';

const getSearchQuery = (state) => state.searchBar;
const getAllUserInfo = (state) => state.usersData;


const searchResults = createSelector (
    [getAllUserInfo ,getSearchQuery] ,
    (users, searchQuery) => {
        if (searchQuery.length === 0) {
            return users;
        }
    
        return users.filter((users) => {
            return JSON.stringify(users).toLowerCase().indexOf(searchQuery.toLowerCase()) > -1;
        })
    }
)

export default searchResults;