const tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4
    },
    right: {
      val: 5
    }
  },
  right: {
    val: 3,
    left: {
      val: 6
    }
  }
}

// 先序遍历
// 1.访问根节点
// 2.访问左节点
// 3.访问右节点

// 递归写法
// let pre = (root) => {
//   console.log(root.val)
//   if (root.left) pre(root.left)
//   if (root.right) pre(root.right)
// }

// pre(tree)

// 非递归写法
let pre = (root) => {
  if (!root) { return }
  const stack = [root]
  while (stack.length) {
    const n = stack.pop()
    console.log(n.val)
    if (n.right) stack.push(n.right)
    if (n.left) stack.push(n.left)
  }
}
pre(tree)