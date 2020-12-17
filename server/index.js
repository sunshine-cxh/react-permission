const express = require('express')
const cors = require('cors')
const { SERVERCONFIG } = require('./config')
const loginRouter = require('./routes/login')
const userInfoRouter = require('./routes/role')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// 解决跨域
app.use(cors())
// 连接数据库
require('./database')

app.use(loginRouter) // 登录路由
app.use('/dashboed', userInfoRouter) // 用户对应的权限

app.listen(SERVERCONFIG.port, SERVERCONFIG.host, err => {
  if (err) {
    console.log(err)
    return
  }
  console.log(`服务器启动成功,地址为http://${SERVERCONFIG.host}:${SERVERCONFIG.port}`)
})
