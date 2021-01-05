import { TOOGLE_SIDEBAR } from "../constants/sidebar-constants"

const initialState = {
    isSidebarOpen: false
}

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOOGLE_SIDEBAR:
            return { ...state, isSidebarOpen: !state.isSidebarOpen }
        default:
            return { ...state }
    }
}

export default sidebarReducer