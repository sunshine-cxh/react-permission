/**
 * 权限表
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PermissionSchema = new Schema({
  // 菜单名字
  name: {
    type: String,
    unique: true,
    required: true
  },
  // 路径
  path: {
    type: String,
    required: true
  },
  // 图标
  icon: {
    type: String,
  },
  // 权限id
  permissionId: {
    type: String,
  },
  // 父级id
  parentId: {
    type: Number,
    default: 0
  },
  // 区分菜单/按钮
  type: {
    type: Number
  }
})
module.exports = mongoose.model('Permission', PermissionSchema)