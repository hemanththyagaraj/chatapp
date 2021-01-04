import { getAllUsers } from "../../helpers/firebase"
import { ADD_NEW_CONTACT_SUCCESS, GET_ALL_CONTACTS_FAILURE, GET_ALL_CONTACTS_REQUEST, GET_ALL_CONTACTS_SUCCESS } from "../constants/contacts-constants"
import store from "../store"

export const fetchContactBook = async (user) => {
    store.dispatch({ type: GET_ALL_CONTACTS_REQUEST })
    try {
        const users = await getAllUsers(user.uid)
        store.dispatch({ type: GET_ALL_CONTACTS_SUCCESS, payload: users })
    } catch (error) {
        store.dispatch({ type: GET_ALL_CONTACTS_FAILURE, payload: error })
    }
}

export const addNewContact = async (contact) => {
    store.dispatch({ type: ADD_NEW_CONTACT_SUCCESS, payload: contact })
}