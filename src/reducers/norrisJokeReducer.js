const initialState = {
    IsLoading: false,
    Joke: ''
}


const chuckJokes = (state = initialState, action) => {
    switch (action.type) {
        case 'JOKE_LOADING':
            return {...state, IsLoading: true}
        case 'JOKE_LOADED':
            return {...state, IsLoading: false}
        case 'SET_JOKE':
            return {...state, Joke: action.payload}
        default:
            return state
    }
}

export default chuckJokes;