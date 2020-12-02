const searchBar = (state = '', action) => {
    switch (action.type) {
        case 'GENERATE_QUERY':
            return action.payload
        default:
            return state
    }
}

export default searchBar;