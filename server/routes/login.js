const express = require('express')
const User = require('../database/model/user')
const { sign } = require('../utils/jwt')
const router = express.Router()

/**
 * login
 */
router.post('/login', async (req, res) => {
  const { username, password } = req.body
  const user = await User.findOne({ username })
  if (!user) {
    // 说明是新用户
    try {
      const user = await User.create({ username, password, roleId: 'user' })
      const token = await sign(username)
      // 保存token
      user.token = token
      await user.save()
      return res.send({
        status: 200,
        message: '登录成功',
        token
      })
    } catch (error) {
      return res.send({
        status: 201,
        message: error
      })
    }
  } else {
    console.log(user, 'user')
    // 说明存在
    return res.send({
      status: 200,
      message: '登录成功',
      token: user.token
    })
  }
})

module.exports = router