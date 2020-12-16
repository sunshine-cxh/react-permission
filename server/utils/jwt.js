/**
 * sign or verify
 */
const jwt = require('jsonwebtoken')
const { PRIVATEKEY } = require('../config')

// 加密
const sign = (data) => {
  return jwt.sign({ data }, PRIVATEKEY, { expiresIn: '7d' }
  )
}

// 解密
const verify = (token) => {
  let res = ''
  try {
    res = jwt.verify(token, PRIVATEKEY)
  } catch (error) {
    res = '过期了'
  }
  return res
}

module.exports = {
  sign,
  verify
}