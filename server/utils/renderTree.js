// 生成树形结构
function renderTree (permissions) {
  return new Promise((resolve, reject) => {
    const treeList = permissions.reduce((p, c) => {
      if (c.parentId === '0') {
        p.push(c)
      } else {
        // 不是一级菜单
        const parentPermission = getParentPermission(permissions, c)
        if (parentPermission) {
          parentPermission.children = parentPermission.children ? [...parentPermission.children, c] : [c]
        } else {
          reject('添加的菜单参数错误', c)
          return
        }
      }
      return p
    }, [])
    resolve(treeList)
  })
}

// 找对应的父级节点
function getParentPermission (permissions, item) {
  return permissions.find(permission => {
    console.log(permission._id, item.parentId, '~~~')
    return permission._id == item.parentId
  })
}

module.exports = renderTree