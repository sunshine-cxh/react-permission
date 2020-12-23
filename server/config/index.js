const SERVERCONFIG = {
  port: 3001,
  host: 'localhost'
}
const MONGODBCONFIG = {
  port: 27017,
  host: '127.0.0.1',
  database: 'react-permission'
}

const PRIVATEKEY = 'XGfGuyvd'
// 用户白名单，默认只有这两个用户可以登录,并且不检查
const USERWHITELIST = ['admin', 'user']
module.exports = {
  SERVERCONFIG,
  MONGODBCONFIG,
  PRIVATEKEY,
  USERWHITELIST
}