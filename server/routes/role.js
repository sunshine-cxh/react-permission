const express = require('express')
const router = express.Router()
const User = require('../database/model/user')
const Role = require('../database/model/role')
const Permission = require('../database/model/permission')



/**
 * 请求当前用户对应的权限
 */
router.post('/userInfo', async (req, res) => {
  const { token } = req.headers
  const user = await User.findOne({ token })
  // 拿到对应的roleId
  const name = user.roleId
  // 去Role中查找对应的角色
  const roles = await Role.find({ name })
  if (roles && roles.length) {
    for (let i = 0; i < roles.length; i++) {
      const role = roles[i]
      // 拿到对应的permissionId
      const permissionId = role.permissionId
      const permissions = await Permission.find({ permissionId })
      return res.send({
        status: 200,
        message: '操作成功',
        data: permissions
      })
    }
  }
})

module.exports = router