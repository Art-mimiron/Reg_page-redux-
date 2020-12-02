const usersData = (state = [], action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [...state, action.payload];
        case 'REMOVE_USER':
            return [...state.filter(user => user.id !== action.payload)]
        case 'GET_LOCAL_USERS':
            return [...action.payload]
        default: 
            return state; 
    }
}



export default usersData;