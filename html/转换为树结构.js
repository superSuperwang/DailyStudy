
// 转换为树
function toTree (arr) {
  let tree = {}
  let tmp = {}
  for (let i = 0; i < arr.length; i++) {
    tmp[arr[i].id] = arr[i]
  }

  for (let key in tmp) {
    if (tmp[key].parent_id) {
      tmp[tmp[key].parent_id].children ? tmp[tmp[key].parent_id].children.push(tmp[key]) : tmp[tmp[key].parent_id].children = [tmp[key]]
    } else {
      tree[key] = tmp[key]
    }
  }
  return tree
}
let tree = toTree([{
  id: '1',
  menu_name: '设置',
  menu_url: 'setting',
  parent_id: 0
}, {
  id: '1-1',
  menu_name: '权限设置',
  menu_url: 'setting.permission',
  parent_id: '1'
}, {
  id: '1-1-1',
  menu_name: '用户管理列表',
  menu_url: 'setting.permission.user_list',
  parent_id: '1-1'
}, {
  id: '1-1-2',
  menu_name: '用户管理新增',
  menu_url: 'setting.permission.user_add',
  parent_id: '1-1'
}, {
  id: '1-1-3',
  menu_name: '角色管理列表',
  menu_url: 'setting.permission.role_list',
  parent_id: '1-1'
}])

console.log(tree)


