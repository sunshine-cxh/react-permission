/**
 * 用户表
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  // 用户名
  username: {
    type: String,
    required: true,
    unique: true,
    default: ''
  },
  // 密码
  password: {
    type: String,
    required: true,
    default: ''
  },

  // 用户的唯一标识
  token: {
    type: String,
    default: '',
  },

  // 头像
  avatar: {
    type: String,
    default: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601442698683&di=bff26924fb4b29de807fb9d178e863f2&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201611%2F04%2F20161104110413_XzVAk.gif'
  },

  // 权限id
  roleId: {
    type: String,
    require: true,
    default: 'user' // admin ==> 管理员  user ==> 普通用户
  },

  // 软删除字段 0 不删除 1 删除
  isDeleted: {
    type: Number,
    default: 0
  }
})
module.exports = mongoose.model('User', UserSchema)

