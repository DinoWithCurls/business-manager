import { SET_NAME, SET_LOGIN, SET_EMAIL, SET_IMAGE } from "./actionTypes";

const setLogin = () => {
    return {
        type: SET_LOGIN
    }
}
const setName = (name) => {
    return{
        type:SET_NAME,
        payload: name
    }
}
const setEmail = (email) => {
    return{
        type:SET_EMAIL,
        payload: email
    }
}
const setImage = (imageUrl) => {
    return{
        type:SET_IMAGE,
        payload: imageUrl
    }
}

export {
    setLogin, setName, setEmail, setImage
}