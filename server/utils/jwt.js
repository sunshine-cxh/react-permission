/**
 * sign or verify
 */
const jwt = require('jsonwebtoken')
const { PRIVATEKEY } = require('../config')

// 加密
const sign = (data) => {
  return new Promise((resolve, reject) => {
    try {
      const token = jwt.sign({ data }, PRIVATEKEY, { expiresIn: '7d' })
      resolve(token)
    } catch (error) {
      reject(error)
    }
  })
}

// 解密
const verify = (token) => {
  return new Promise((resolve, reject) => {
    try {
      const info = jwt.verify(token, PRIVATEKEY)
      resolve(info)
    } catch (error) {
      reject('过期了', error)
    }
  })
}
module.exports = {
  sign,
  verify
}