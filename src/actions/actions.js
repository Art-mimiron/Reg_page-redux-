import formatDate from '../utils/dateFormating'
import newUsers from '../utils/inputValueHandler'
import cardControl from '../utils/creditCardValidation'
import nameControl from '../utils/nameValidation'

let maxId = 0;

export const addUser = (userData) => ( {
    type: 'ADD_USER', 
    payload: {...userData, id: maxId++, registrationTime: formatDate(new Date())}
} )
export const removeUser = (id) => ( {
    type: 'REMOVE_USER', 
    payload: id
} )

export const newUser = (value) => ( {
    type: 'GENERATING_USER',
    payload: newUsers(value)
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