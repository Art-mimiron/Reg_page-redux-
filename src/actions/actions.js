import formatDate from '../utils/dateFormating'
import inputValueHandler from '../utils/inputValueHandler'
import cardControl from '../utils/creditCardValidation'
import nameControl from '../utils/nameValidation'
import Axios from 'axios'



// action for local storage.get

export const getLocalUsers = (users) => ( {
    type: 'GET_LOCAL_USERS',
    payload: users
} )

// users reducer
export const addUser = (userData) => ( {
    type: 'ADD_USER', 
    payload: {...userData, id: Date.now(), registrationTime: formatDate(new Date())}
} )
export const removeUser = (id) => ( {
    type: 'REMOVE_USER', 
    payload: id
} )


// new user reducer
export const newUser = (value) => ( {
    type: 'GENERATING_USER',
    payload: inputValueHandler(value)
} )

export const creditCardValidation = (value) => ({
    type: 'GENERATING_CREDIT_CARD',
    payload: cardControl(value)
})

export const nameValidation = (value) => ({
    type: 'GENERATING_NAME',
    payload: nameControl(value)
})

export const loyaltyCodeReset = () => ({type: 'CODE_RESET'})

export const resetTemplate = () => ({type:'RESET_TEMPLATE'})

// searchbar reducer
export const searchQuery = (e) => ({
    type: 'GENERATE_QUERY',
    payload: e.target.value
})

// Chuck Norris joke 

const jokeLoading = () => ({type: 'JOKE_LOADING'})

const jokeLoaded = () => ({type: 'JOKE_LOADED'})

const setJoke = (joke) => ({
    type: 'SET_JOKE',
    payload: joke
})

export const getJoke = () => {
   return (dispatch) => {
        dispatch(jokeLoading());
        Axios.get('https://api.chucknorris.io/jokes/random')
        .then((joke)=>{
            setTimeout(()=>{
                dispatch(setJoke(joke.data.value));
                dispatch(jokeLoaded());
            }, 3000)
        })
        .catch((e) => console.log(e))
    }
}