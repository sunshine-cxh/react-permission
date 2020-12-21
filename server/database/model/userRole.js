/**
 * 用户角色关联表
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserRoleSchema = new Schema({
  // 用户表的主键id
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  // 角色表的name
  roleName: {
    type: [String],
    required: true,
  }
})
module.exports = mongoose.model('UserRole', UserRoleSchema)

