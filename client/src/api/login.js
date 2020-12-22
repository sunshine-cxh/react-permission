// 登录模块
import request from '../utils/request'
export default {
  // 请求登录
  reqLogin (username, password) {
    return request({
      url: '/login',
      method: 'POST',
      data: {
        username,
        password
      }
    })
  },
  // 退出登录
  reqOutLogin () {
    return request({
      url: '/outLogin',
      method: 'POST'
    })
  }
}