// 并查集
// 初始化
// 每个人都是自身的父节点

class UnionFind {
  constructor(n) {
    this.fa = new Array(n).fill(0).map((val, index) => index)
  }

  // 查,缩小路径，所有节点都指向根节点
  find(x) {
    if (x !== this.fa(x)) {
      this.fa(x) = find(fa[x])
    }
    return this.fa(x)
  }

  // 并，如果不同祖先，则合并两个树，直接把一个祖先变成另一个祖先的儿子
  union(x, y) {
    x = this.find(x)
    y = this.find(y)
    this.fa(x) = y
  }

}