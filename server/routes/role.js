const express = require('express')
const router = express.Router()
const User = require('../database/model/user')
const Role = require('../database/model/role')
const Permission = require('../database/model/permission')
const UserRole = require('../database/model/userRole')
const RolePermission = require('../database/model/rolePermission')
const renderTree = require('../utils/renderTree')
/**
 * 请求当前用户对应的权限
 */
router.post('/userInfo', async (req, res) => {
  let arr = []
  const { token } = req.headers
  // 1.根据token在User表中查询用户,得到用户id
  const user = await User.findOne({ token }, '_id')
  const userId = user._id
  // 2.根据用户id去UserRole表中查询对应的角色名称
  const roleNameArr = await UserRole.findOne({ userId }, 'roleName')
  const roleName = roleNameArr.roleName
  for (let i = 0; i < roleName.length; i++) {
    // 得到每一个角色
    const role = roleName[i]
    // 3.根据角色名称去Role表中查询对应的具体角色，得到角色id
    const roleRes = await Role.findOne({ name: role }, '_id')
    // 得到角色id
    const roleId = roleRes._id
    // 4.根据角色id去RolePermission表中查询对应的菜单名称
    const menus = await RolePermission.findOne({ roleId }, 'menus')
    // 得到菜单名称组成的数组
    const menuName = menus.menus
    for (let i = 0; i < menuName.length; i++) {
      const name = menuName[i]
      // 5.根据菜单名称去Permission表中查询对应的具体菜单
      const menuInfo = await Permission.findOne({ name })
      arr.push(menuInfo)
    }
  }
  // 6.得到菜单,生成树形结构
  
  // 7.返回树形结构数据给前端
  res.send('1')
})

module.exports = router;



