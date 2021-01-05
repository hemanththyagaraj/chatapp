import { GET_MESSAGES_FAILURE, GET_MESSAGES_REQUEST, GET_MESSAGES_SUCCESS, SET_CURRENT_CONVERSATION_ID, STORE_MESSAGE_FAILURE, STORE_MESSAGE_SUCCESS } from "../constants/conversations-constants"

const initialState = {
    currentReceiverId: null,
    messages: [],
    errorStoringMessage: '',
    loadingMessages: false,
    errorLoadingMessages: ''
}

const conversationReducer = (state = initialState, action) => {
    switch (action.type) {
        case STORE_MESSAGE_SUCCESS:
            return { ...state }
        case STORE_MESSAGE_FAILURE:
            return { ...state, errorStoringMessage: action.payload }
        case GET_MESSAGES_REQUEST:
            return { ...state, loadingMessages: true }
        case GET_MESSAGES_SUCCESS:
            return { ...state, loadingMessages: false, messages: action.payload }
        case GET_MESSAGES_FAILURE:
            return { ...state, loadingMessages: false, errorLoadingMessages: action.payload }
        case SET_CURRENT_CONVERSATION_ID:
            return { ...state, currentReceiverId: action.payload }
        default:
            return { ...state }
    }
}

export default conversationReducer