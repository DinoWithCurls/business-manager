import { SET_NAME, SET_EMAIL, SET_IMAGE, SET_LOGIN } from './actionTypes';

const loginReducer = ( state = { login: false, name:'', email:'', imageUrl:''}, action) => {
    // eslint-disable-next-line default-case
    switch(action.type){
        case SET_LOGIN:
            return {
                ...state,
                login: true
            }
        case SET_NAME: 
            return {
                ...state,
                name: action.payload
            }
        case SET_EMAIL: 
            return {
                ...state,
                email: action.payload
            }
        case SET_IMAGE:
            return {
                ...state,
                imageUrl: action.payload
            }
        default:
            return state;
    }
}

export default loginReducer;