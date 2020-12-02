const userDataTemplate = {
    name: "",
    gender: '',
    creditCard: '',
    loyaltyProgram: false,
    loyaltyCode: '',
    registrationTime: null,
    id: null
}

const newUser = (state = userDataTemplate, action) => {
    switch (action.type) {
        case 'GENERATING_USER':
            return {...state, ...action.payload}
        case 'RESET_TEMPLATE':
            return {...userDataTemplate}
        case 'GENERATING_CREDIT_CARD':
            return {...state, ...action.payload}
        case 'GENERATING_NAME':
            return {...state, ...action.payload}
        case 'CODE_RESET':
            return {...state, loyaltyCode: ''}
        default: 
            return state; 
    }
}



export default newUser;