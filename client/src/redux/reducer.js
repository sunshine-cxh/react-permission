import { combineReducers } from 'redux'
import { LOGIN } from './constants'
const initState = localStorage.getItem('token') ? localStorage.getItem('token') : ''
function login (prevState = initState, action) {
  switch (action.type) {
    case LOGIN:
      // token,存入localstorage
      localStorage.setItem('token', action.data)
      return action.data
    default:
      return prevState
  }
}
export default combineReducers({
  login
})