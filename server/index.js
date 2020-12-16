const express = require('express')
const cors = require('cors')
const { SERVERCONFIG } = require('./config')
const app = express()

// 解决跨域
app.use(cors())
// 连接数据库
require('./database')


app.listen(SERVERCONFIG.port, SERVERCONFIG.host, err => {
  if (err) {
    console.log(err)
    return
  }
  console.log(`服务器启动成功,地址为http://${SERVERCONFIG.host}:${SERVERCONFIG.port}`)
})
