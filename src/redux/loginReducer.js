import { SET_NAME, SET_EMAIL, SET_IMAGE } from './actionTypes';

const loginReducer = ( state = { name:'', email:'', imageUrl:''}, action) => {
    // eslint-disable-next-line default-case
    switch(action.type){
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