import { fireStore, firebase } from "../../config/firebase"
import { getAllUsers } from "../../helpers/firebase"
import { ADD_NEW_CONTACT_FAILURE, ADD_NEW_CONTACT_SUCCESS, GET_ALL_CONTACTS_FAILURE, GET_ALL_CONTACTS_REQUEST, GET_ALL_CONTACTS_SUCCESS, GET_MY_CONTACTS_FAILURE, GET_MY_CONTACTS_SUCCESS } from "../constants/contacts-constants"
import store from "../store"

const usersRef = fireStore.collection('users')

export const fetchContactBook = async (user) => {
    store.dispatch({ type: GET_ALL_CONTACTS_REQUEST })
    try {
        const users = await getAllUsers(user.uid)
        store.dispatch({ type: GET_ALL_CONTACTS_SUCCESS, payload: users })
    } catch (error) {
        store.dispatch({ type: GET_ALL_CONTACTS_FAILURE, payload: error })
    }
}

export const addNewContact = async (loggedInUser, contact) => {
    try {
        await usersRef.doc(loggedInUser.uid).update({ contacts: firebase.firestore.FieldValue.arrayUnion(contact) })
        await usersRef.doc(contact.uid).update({ contacts: firebase.firestore.FieldValue.arrayUnion(loggedInUser) })
        store.dispatch({ type: ADD_NEW_CONTACT_SUCCESS, payload: contact })
    } catch (error) {
        store.dispatch({ type: ADD_NEW_CONTACT_FAILURE })
    }
}

export const getMyContacts = async (loggedUserId) => {
    try {
        const docRef = await usersRef.doc(loggedUserId).get()
        const { contacts } = await docRef.data()
        store.dispatch({ type: GET_MY_CONTACTS_SUCCESS, payload: contacts })
    } catch (error) {
        store.dispatch({ type: GET_MY_CONTACTS_FAILURE })
    }
}