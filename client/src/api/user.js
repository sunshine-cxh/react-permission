import request from '../utils/request'
export default {
  reqUserInfo () {
    return request({
      url: '/dashboed/userInfo',
      method: 'POST'
    })
  }
}