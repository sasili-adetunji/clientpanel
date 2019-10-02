import {DISABLE_BALANCE_ON_ADD, DISABLE_BALANCE_ON_EDIT, ALLOW_REGISTRATION} from '../actions/types';

const initialState = {
    disabledBalanceOnAdd: true,
    disabledBalanceOnEdit: false,
    allowregistration: false,

}
export default (state=initialState, action) => {

    switch(action.type) {
        case DISABLE_BALANCE_ON_ADD:
            return {
                ...state,
                disabledBalanceOnAdd: !state.disabledBalanceOnAdd
            }
        case DISABLE_BALANCE_ON_EDIT:
            return {
                ...state,
                disabledBalanceOnEdit: !state.disabledBalanceOnEdit
            }
        case ALLOW_REGISTRATION:
            return {
                ...state,
                allowregistration: !state.allowregistration
            }
        default:
            return state
    }
}