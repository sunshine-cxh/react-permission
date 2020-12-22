/**
 * 
 * @param {*} permissionsAll 传入的菜单数据，自动格式化为树形结构
 */
function filterPermissionsRenderTree (permissionsAll) {
  function fn (permissions, flag = false) {
    return permissions.reduce((p, c) => {
      if (c.parentName === '0') {
        p.push(c)
        c.children = []
        // 找他存在的子元素
        const cMenus = permissions.filter(item => {
          return item.parentName === c.name
        })
        if (cMenus.length) {
          c.children.push(...cMenus)
          fn(cMenus, true)
        }
      }
      if (flag) {
        const cMenus = permissionsAll.filter(item => {
          return item.parentName === c.name
        })
        if (cMenus.length) {
          c.children = c.children ? [...c.children, ...cMenus] : cMenus
          fn(cMenus, true)
        }
      }
      return p
    }, [])
  }
  const res = fn(permissionsAll)
  console.log(res)
  return res
}

module.exports = filterPermissionsRenderTree