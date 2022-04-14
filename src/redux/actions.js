import { SET_NAME, SET_LOGIN, SET_EMAIL, SET_IMAGE, ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from "./actionTypes";

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

const addToList = (item) => {
    return {
        type: ADD_ITEM,
        payload:item
    }
}

const deleteFromList = (item) => {
    return {
        type: DELETE_ITEM,
        payload: item
    }
}

const editItem = (item) => {
    return {
        type: EDIT_ITEM,
        payload: item
    }
}

export {
    setLogin, setName, setEmail, setImage, addToList, deleteFromList, editItem
}