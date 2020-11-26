const usersData = (state = [], action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [...state, action.payload];
        case 'REMOVE_USER':
            const index = state.findIndex(el => el.id === action.payload)
            return [...state.slice(0, index), ...state.slice(index+1)]
        default: 
            return state; 
    }
}



export default usersData;