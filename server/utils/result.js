/**
 * return success / error
 */
class Success {
  constructor({ status = 200, message = '操作成功', data = null }) {
    this.status = status
    this.message = message
    this.data = data
  }
}
class Error {
  constructor({ status = 201, message = '操作失败', data = '' }) {
    this.status = status
    this.message = message
    this.data = data
  }
}
module.exports = {
  Success,
  Error
}