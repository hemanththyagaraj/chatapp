import { auth, googleAuthProvider } from "../../config/firebase"
import { storeLoggedInUserIntoDB } from "../../helpers/firebase"
import { SIGN_IN_USER_FAILURE, SIGN_IN_USER_REQUEST, SIGN_IN_USER_SUCCESS, SIGN_OUT_USER_FAILURE, SIGN_OUT_USER_SUCCESS } from "../constants/auth-constants"
import store from "../store"


export function onSignInSuccess(user) {
    return { type: SIGN_IN_USER_SUCCESS, payload: user }
}

export function onSignInFailure(error) {
    return { type: SIGN_IN_USER_FAILURE, payload: error }
}

export function onSignOutSuccess() {
    return { type: SIGN_OUT_USER_SUCCESS }
}

export function onSignOutFailure() {
    return { type: SIGN_OUT_USER_FAILURE }
}

export function onSignInRequest() {
    return { type: SIGN_IN_USER_REQUEST }
}

export const signInUserWithGoogle = async () => {
    store.dispatch(onSignInRequest())
    try {
        const { user } = await auth.signInWithPopup(googleAuthProvider)
        store.dispatch(onSignInSuccess(user))
        localStorage.setItem('user', JSON.stringify(user))
        storeLoggedInUserIntoDB(user)
    } catch (error) {
        localStorage.removeItem('user')
        store.dispatch(onSignInFailure())
    }
}

export const signOutUser = () => {
    return async (dispatch) => {
        try {
            await auth.signOut()
            store.dispatch(onSignOutSuccess())
            localStorage.removeItem('user')
        } catch (error) {
            onSignOutFailure()
        }
    }
}