import { TOOGLE_SIDEBAR } from "../constants/sidebar-constants"
import store from "../store"

export const toggleSideBar = () => {
    store.dispatch({ type: TOOGLE_SIDEBAR })
}