import { combineReducers } from 'redux'
import authReducer from './reducers/auth-reducer'
import contactsReducer from './reducers/contacts-reducer'
import conversationReducer from './reducers/conversations-reducer'
import sidebarReducer from './reducers/sidebar-reducer'

const rootReducer = combineReducers({
    auth: authReducer,
    contact: contactsReducer,
    conversation: conversationReducer,
    sidebar: sidebarReducer
})

export default rootReducer