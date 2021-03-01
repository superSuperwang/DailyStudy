// 二叉查找树
// 什么是二叉查找树？？
// 对于每个节点来说，其左子节点小于其本身，其右子节点大于其本身

function Node(val) {
  this.val = val
  this.left = null
  this.right = null
}

let tree = null

const findTreeNode = (node) => {
  let p = tree
  while (p) {
    if (node > p.val) {
      p = p.right
    } else if (node < p.val) {
      p = p.left
    } else {
      return p
    }
  }
  return null
}

const insertTreeNode = (node) => {
  if (!tree) {
    tree = new Node(node)
    return
  }

  let p = tree
  while (p) {
    if (p.val > node) {
      if (!p.left) {
        p.left = new Node(node)
        return
      }
      p = p.left
    } else {
      if (!p.right) {
        p.right = new Node(node)
        return
      }
      p = p.right
    }
  }
}

insertTreeNode(33)
insertTreeNode(17)
insertTreeNode(50)
insertTreeNode(13)
insertTreeNode(18)