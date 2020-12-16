const mongoose = require('mongoose');
const { MONGODBCONFIG } = require('../config')
mongoose.connect(`mongodb://${MONGODBCONFIG.host}:${MONGODBCONFIG.port}/${MONGODBCONFIG.database}`, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
mongoose.connection.once('open', function () {
  console.log('数据库连接成功')
});

module.exports = mongoose