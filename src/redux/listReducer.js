import { CREATE_LIST, ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from "./actionTypes";

const listReducer = (state = { list: []}, action) => {
    switch(action.type) {
        case CREATE_LIST:
            return createList(state, action)
        case ADD_ITEM:
            return addToList(state, action);
        case DELETE_ITEM:
            return deleteFromList(state, action);
        case EDIT_ITEM:
            return editItem(state, action);
        default:
            return state;
    }


}

const createList = (state, action) => {
    return {
        ...state,
        list: action.payload
    }
}


const addToList = ( state, action ) => {
    console.log('add to list called', action.payload);
    return {
        ...state,
        list:[action.payload, ...state.list]
    }
}

const deleteFromList = (state, action) => {
    const itemToDelete = action.payload;
    const initSet = [...state.list];
    const filteredSet = initSet.filter(item => item.id !== itemToDelete.id);
    return {
        ...state,
        list: filteredSet
    };
}

const editItem = (state, action) => {
    const itemToEdit = action.payload;
    const initSet = [...state.list];
    const editedList = initSet.map(u => u.id !== itemToEdit.id ? u : itemToEdit);
    return {
        ...state,
        list: editedList
    }
}

export default listReducer;