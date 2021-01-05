import { fireStore, firebase } from "../../config/firebase"
import { GET_MESSAGES_FAILURE, GET_MESSAGES_REQUEST, GET_MESSAGES_SUCCESS, SET_CURRENT_CONVERSATION_ID, STORE_MESSAGE_FAILURE, STORE_MESSAGE_SUCCESS } from "../constants/conversations-constants"
import store from "../store"

const conversationRef = fireStore.collection('chat')

export const storeConversation = async (conversation) => {
    const { senderId, receiverId } = conversation
    try {
        const docId = senderId > receiverId ? `${senderId}${receiverId}` : `${receiverId}${senderId}`
        const documentRef = await conversationRef.doc(docId)
        const document = await documentRef.get()
        if (document.exists) {
            documentRef.update({
                messages: firebase.firestore.FieldValue.arrayUnion(conversation)
            })
        } else {
            documentRef.set({ messages: [conversation] })
        }
        store.dispatch({ type: STORE_MESSAGE_SUCCESS })
    } catch (error) {
        store.dispatch({ type: STORE_MESSAGE_FAILURE, payload: error })
    }
}

export const onSuccessFetchMessages = (messages) => {
    store.dispatch({ type: GET_MESSAGES_SUCCESS, payload: messages })
}

export const onFailFetchMessages = (error) => {
    store.dispatch({ type: GET_MESSAGES_FAILURE, payload: error })
}

export const onRequestFetchMessages = () => {
    store.dispatch({ type: GET_MESSAGES_REQUEST })
}

export const setCurrentConversationId = (uid) => {
    store.dispatch({ type: SET_CURRENT_CONVERSATION_ID, payload: uid })
}