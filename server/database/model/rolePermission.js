/**
 * 角色菜单关联表
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RolePermissionSchema = new Schema({
  // 角色表的主键id
  roleId: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  // 菜单表的name
  menus: {
    type: [String],
    required: true,
  }
})
module.exports = mongoose.model('RolePermission', RolePermissionSchema)