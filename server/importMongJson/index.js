const fs = require('fs')
const path = require('path')
const User = require('../database/model/user')
const Role = require('../database/model/role')
const Permission = require('../database/model/permission')
let whiteList = [{ user: User }, { role: Role }, { permission: Permission }]
fs.readdir(path.resolve(__dirname, '../baseData'), (err, dirsName) => {
  if (err) {
    console.log(err)
    return
  }
  for (let i = 0; i < dirsName.length; i++) {
    const dir = dirsName[i]
    fs.readFile(path.resolve(__dirname, '../baseData/' + dir), async (err, data) => {
      const baseData = data.toString()
      const prefix = dir.split('.')[0]
      const res = whiteList.find(model => model[prefix])
      const result = await res[prefix].create(baseData)
      if (result) {
        console.log('数据写入成功')
      }
    })
  }
})