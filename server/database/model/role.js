/**
 * 角色表
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RoleSchema = new Schema({
  // 角色名称
  name: {
    type: String,
    unique: true
  },

  // 权限id
  permissionId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Role', RoleSchema)