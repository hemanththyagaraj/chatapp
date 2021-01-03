import { SIGN_IN_USER_FAILURE, SIGN_IN_USER_REQUEST, SIGN_IN_USER_SUCCESS, SIGN_OUT_USER_FAILURE, SIGN_OUT_USER_SUCCESS } from "../constants/auth-constants"

const initialState = {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: ''
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN_USER_REQUEST:
            return { ...state, loading: true }
        case SIGN_IN_USER_SUCCESS:
            return { ...state, user: action.payload, loading: false, isAuthenticated: true, error: '' }
        case SIGN_IN_USER_FAILURE:
            return { ...state, user: null, loading: false, error: action.payload, isAuthenticated: false }
        case SIGN_OUT_USER_SUCCESS:
            return { ...state, user: null, isAuthenticated: false }
        case SIGN_OUT_USER_FAILURE:
            return { ...state }
        default:
            return { ...state }
    }
}

export default authReducer