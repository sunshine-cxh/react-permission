const express = require('express')
const User = require('../database/model/user')
const { USERWHITELIST } = require('../config')
const { sign } = require('../utils/jwt')
const { Success, Error } = require('../utils/result')
const router = express.Router()

/**
 * login
 */
router.post('/login', async (req, res) => {
  const { username, password } = req.body
  if (!username || !password) {
    return res.send(new Error({
      message: '缺少必要参数'
    }))
  }
  const user = await User.findOne({ username })
  if (user) {
    // 说明存在
    return res.send(new Success({
      data: {
        token: user.token
      }
    }))
  } else {
    // 说明不存在
    res.send(new Error({
      message: '用户名或者密码不正确'
    }))
  }
})

module.exports = router