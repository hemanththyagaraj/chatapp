import { combineReducers } from 'redux'
import authReducer from './reducers/auth-reducer'
import contactsReducer from './reducers/contacts-reducer'

const rootReducer = combineReducers({
    auth: authReducer,
    contact: contactsReducer
})

export default rootReducer