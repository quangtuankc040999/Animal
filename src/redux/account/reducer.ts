import { IAccount, IAction } from "../../interfaces/components";
import actionTypes from "./actionTypes";

const initialState: IAccount = {
    tokenType: '',
    expiresIn: '',
    accessToken: '',
}

const accountReducer = (
    state = initialState,
    action: IAction
) => {
    const {type, payload} = action
    switch (type) {
        case actionTypes.LOGIN_SUCCESS:
        localStorage.setItem('token', payload.accessToken)
        return payload
        
        case actionTypes.LOGIN_FAIL:
            localStorage.clear()
        return payload.response.data
        case actionTypes.REMOVE_ERROR: 
        return {}
    }
    return state
}
export default accountReducer