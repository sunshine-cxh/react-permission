const fs = require('fs')
const path = require('path')
const User = require('../database/model/user')
const Role = require('../database/model/role')
const Permission = require('../database/model/permission')
const UserRole = require('../database/model/userRole')
const RolePermission = require('../database/model/rolePermission')
require('../database')
let count = 0
let whiteList = [{ user: User }, { role: Role }, { permission: Permission }];

fs.readdir(path.resolve(__dirname, '../baseData'), (err, dirsName) => {
  if (err) {
    console.log(err)
    return
  }
  for (let i = 0; i < dirsName.length; i++) {
    const dir = dirsName[i]
    fs.readFile(path.resolve(__dirname, '../baseData/' + dir), async (err, data) => {
      const baseData = data.toString()
      const prefix = dir.split('.')[0]
      const res = whiteList.find(model => model[prefix])
      const result = await res[prefix].create(JSON.parse(baseData))
      if (result) {
        if (++count === dirsName.length) {
          writeData()
        }
      }
    })
  }
});

async function writeData () {
  const users = await User.find({})
  const roles = await Role.find({})
  users.forEach((user, index) => {
    UserRole.create({
      userId: user._id,
      roleName: index === 0 ? ['admin'] : ['user']
    })
  })
  roles.forEach((role, index) => {
    RolePermission.create({
      roleId: role._id,
      menus: index === 0 ? ['权限管理', '安全管理', '用户管理', '角色管理', '菜单管理', '每日食谱', '健康管理'] : ['健康管理', '每日食谱', '权限管理', '角色管理']
    })
  })
  console.log('基本数据写入完毕，请启动服务器吧~~')
}
