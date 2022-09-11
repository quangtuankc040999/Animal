import actionTypes from "./actionTypes";
import { IAccount, LoginParam } from "../../interfaces/components";
import {LoginService} from '../../service/login.api'

export const loginAction = async (loginParams: LoginParam) => {
  try {
    const res = await LoginService.login('v2/oauth2/token', loginParams)
    const payload:IAccount ={
      accessToken: res.data.access_token,
      expiresIn: res.data.expires_in,
      tokenType: res.data.token_type
    }
    return {
      type: actionTypes.LOGIN_SUCCESS,
      payload: payload
    }
  } catch (error:any) {
    return {
      type: actionTypes.LOGIN_FAIL,
      payload: error
    }
  }
}
export const removeErrorAction = () => {
    return {
      type: actionTypes.REMOVE_ERROR,
      payload: {}
    }

}