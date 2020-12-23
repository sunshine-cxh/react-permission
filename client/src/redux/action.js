import { Login, User } from '../api'
import { LOGIN, USER } from './constants'
// 登录
const login = (data) => ({ type: LOGIN, data })
export const loginAsync = (username, password) => {
  return async (dispatch) => {
    const data = await Login.reqLogin(username, password)
    dispatch(login(data.token))
    return data.token
  }
}
// 获取用户信息
const getUserInfo = data => ({ type: USER, data })
export const getUserInfoAsync = () => {
  return async dispatch => {
    const data = await User.reqUserInfo()
    dispatch(getUserInfo(data))
  }
}
