import { combineReducers } from 'redux'
import { LOGIN, USER } from './constants'
const initLoginState = localStorage.getItem('token') ? localStorage.getItem('token') : ''
function login (prevState = initLoginState, action) {
  switch (action.type) {
    case LOGIN:
      // token,存入localstorage
      localStorage.setItem('token', action.data)
      return action.data
    default:
      return prevState
  }
}
const initUserState = {

}
function user (prevState = initUserState, action) {
  switch (action.type) {
    case USER:
      return action.data
    default:
      return prevState
  }
}


export default combineReducers({
  login,
  user
})