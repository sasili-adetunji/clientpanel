import { NOTIFY_USERS } from "../actions/types";

const initialState = {
    message: null,
    messageType: null
}

export default (state=initialState, action) => {
    switch(action.type) {
        case NOTIFY_USERS:
            return {
                ...state,
                message: action.message,
                messageType: action.messageType
            };
        default:
            return state
    }
}