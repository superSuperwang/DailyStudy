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


// 中序遍历
// 1.访问左节点
// 2.访问根节点
// 3.访问右节点

// 递归写法
// let inner = (root) => {
//   if (root.left) inner(root.left)
//   console.log(root.val)
//   if (root.right) inner(root.right)
// }
// inner(tree)

// 非递归写法
let inner = (root) => {
  if (!root) { return }
  const stack = []
  let p = root
  while (stack.length || p) {
    while (p) {
      stack.push(p)
      p = p.left
    }
    const n = stack.pop()
    console.log(n.val)
    p = n.right
  }
}


inner(tree)