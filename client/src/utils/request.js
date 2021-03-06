import axios from 'axios'
import { notification } from 'antd';
import store from '../redux/store'
import errorMessage from './errors'
const instance = axios.create({
  baseURL: '/api',
  timeout: 20000
})
instance.interceptors.request.use(config => {
  const token = store.getState('login').login
  if (token) {
    config.headers.token = token
  }
  return config
})
instance.interceptors.response.use(
  res => {
    if (res.data.status === 200) {
      notification.success({
        message: res.status,
        description: errorMessage[res.status]
      })
      return res.data.data
    }
    notification.error({
      message: res.data.status,
      description: res.data.message || errorMessage[res.data.status] || '错误对象中没有引入该status'
    })
    return Promise.reject(res.data.message)
  },
  err => {
    console.log(err, 'err')
    if (err.response) {
      const status = err.response.status
      notification.error({
        message: status,
        description: errorMessage[status] || '错误对象中没有引入该status'
      })
    } else {

    }
    // 中断promise
    return new Promise(() => { })
  }
)

export default instance