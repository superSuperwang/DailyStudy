// 创建最小堆类
class MinHeap {
  constructor() {
    this.heap = []
  }

  getParentIndex(i) {
    return (i - 1) >> 1
  }

  getLeftIndex(i) {
    return i * 2 + 1
  }

  getRightIndex(i) {
    return i * 2 + 2
  }

  swap(i1, i2) {
    const tmp = this.heap[i1]
    this.heap[i1] = this.heap[i2]
    this.heap[i2] = tmp
  }

  shiftUp(index) {
    if (index === 0) return
    // 找到其父节点
    const parentIndex = this.getParentIndex(index)
    if (this.heap[parentIndex] > this.heap[index]) {
      //交换节点
      this.swap(parentIndex, index)
      // 继续执行上移操作
      this.shiftUp(parentIndex)
    }
  }

  shiftDown(index) {
    if (index === this.heap.length - 1) return
    // 找到其子节点
    const leftIndex = this.getLeftIndex(index)
    const rightIndex = this.getRightIndex(index)
    if (this.heap[leftIndex] <= this.heap[index]) {
      //交换节点
      this.swap(leftIndex, index)
      // 继续执行下移操作
      this.shiftDown(leftIndex)
    }
    if (this.heap[rightIndex] <= this.heap[index]) {
      //交换节点
      this.swap(rightIndex, index)
      // 继续执行下移操作
      this.shiftDown(rightIndex)
    }
  }
  getSize() {
    return this.heap.length
  }
  getFirst() {
    return this.heap[0]
  }
  insert(val) {
    this.heap.push(val)
    // 执行上移操作
    this.shiftUp(this.heap.length - 1)
  }

  //删除第一个节点
  pop() {
    this.heap[0] = this.heap.pop()
    // 执行下移操作
    this.shiftDown(0)
  }
}
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const heap = new MinHeap()
  nums.forEach((n) => {
    heap.insert(n)
    if (heap.getSize() > k) {
      heap.pop()
    }

  })
  return heap.getFirst()
};

console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))