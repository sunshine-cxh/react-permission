/**
 * 角色表
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RoleSchema = new Schema({
  // 角色名称
  name: {
    type: String,
    unique: true,
    default: 'user' // admin 管理员  user 普通用户
  },

})

module.exports = mongoose.model('Roles', RoleSchema)