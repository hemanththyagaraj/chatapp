import { ADD_NEW_CONTACT_SUCCESS, GET_ALL_CONTACTS_FAILURE, GET_ALL_CONTACTS_REQUEST, GET_ALL_CONTACTS_SUCCESS } from "../constants/contacts-constants"

const initialState = {
    myContacts: [],
    contactBook: [],
    loadingContactBook: false,
    errorContactBook: ''
}

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_CONTACTS_REQUEST:
            return { ...state, loadingContactBook: true }
        case GET_ALL_CONTACTS_SUCCESS:
            return { ...state, loadingContactBook: false, contactBook: action.payload }
        case GET_ALL_CONTACTS_FAILURE:
            return { ...state, loadingContactBook: false, errorContactBook: action.payload }
        default:
            return { ...state }
        case ADD_NEW_CONTACT_SUCCESS:
            return { ...state, myContacts: [...state.myContacts, action.payload] }
    }
}

export default contactsReducer