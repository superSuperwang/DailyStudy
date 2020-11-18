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

// 后序遍历
// 1.访问左节点
// 2.访问右节点
// 3.访问根节点

// 递归
// let postorder = (root) => {
//   if (root.left) postorder(root.left)
//   if (root.right) postorder(root.right)
//   console.log(root.val)
// }
// postorder(tree)

// 非递归
let postorder = (root) => {
  if (!root) { return }
  const stack = [root]
  const dxStack = []
  while (stack.length) {
    const n = stack.pop()
    dxStack.push(n.val)
    if (n.left) stack.push(n.left)
    if (n.right) stack.push(n.right)
  }

  while (dxStack.length) {
    console.log(dxStack.pop())
  }
}
postorder(tree)