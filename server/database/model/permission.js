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
  // 匹配的组件
  component: {
    type: String,
    required: true
  },
  // 图标
  icon: {
    type: String,
  },
  // 父级name
  parentName: {
    type: String,
    default: "0"
  },
  // 区分菜单/按钮
  type: {
    type: Number,
    default: 0
  }
})
module.exports = mongoose.model('Permissions', PermissionSchema)