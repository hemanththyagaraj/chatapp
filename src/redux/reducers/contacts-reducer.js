import { ADD_NEW_CONTACT_FAILURE, ADD_NEW_CONTACT_SUCCESS, GET_ALL_CONTACTS_FAILURE, GET_ALL_CONTACTS_REQUEST, GET_ALL_CONTACTS_SUCCESS, GET_MY_CONTACTS_FAILURE, GET_MY_CONTACTS_REQUEST, GET_MY_CONTACTS_SUCCESS } from "../constants/contacts-constants"

const initialState = {
    myContacts: [],
    contactBook: [],
    loadingContactBook: false,
    loadingMyContacts: false,
    errorContactBook: '',
    errorMyContacts: ''
}

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_CONTACTS_REQUEST:
            return { ...state, loadingContactBook: true }
        case GET_ALL_CONTACTS_SUCCESS:
            return { ...state, loadingContactBook: false, contactBook: action.payload }
        case GET_ALL_CONTACTS_FAILURE:
            return { ...state, loadingContactBook: false, errorContactBook: action.payload }
        case GET_MY_CONTACTS_REQUEST:
            return { ...state, loadingMyContacts: true }
        case GET_MY_CONTACTS_SUCCESS:
            return { ...state, loadingMyContacts: false, myContacts: action.payload }
        case GET_MY_CONTACTS_FAILURE:
            return { ...state, loadingMyContacts: false, errorMyContacts: action.payload }
        case ADD_NEW_CONTACT_SUCCESS:
            return { ...state, myContacts: [...state.myContacts, action.payload] }
        case ADD_NEW_CONTACT_FAILURE:
            return { ...state }
        default:
            return { ...state }
    }
}

export default contactsReducer