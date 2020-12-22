import { Login } from '../api'
import { LOGIN } from './constants'
// 登录
const login = (data) => ({ type: LOGIN, data })
export const loginAsync = (username, password) => {
  return async (dispatch) => {
    const data = await Login.reqLogin(username, password)
    dispatch(login(data.token))
    return data.token
  }
}
// 退出登录