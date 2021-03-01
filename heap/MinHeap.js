// 创建最小堆类
// class MinHeap {
//   constructor() {
//     this.heap = []
//   }

//   getParentIndex(i) {
//     return (i - 1) >> 1
//   }

//   getLeftIndex(i) {
//     return i * 2 + 1
//   }

//   getRightIndex(i) {
//     return i * 2 + 2
//   }

//   swap(i1, i2) {
//     const tmp = this.heap[i1]
//     this.heap[i1] = this.heap[i2]
//     this.heap[i2] = tmp
//   }

//   shiftUp(index) {
//     if (index === 0) return
//     // 找到其父节点
//     const parentIndex = this.getParentIndex(index)
//     if (this.heap[parentIndex] > this.heap[index]) {
//       //交换节点
//       this.swap(parentIndex, index)
//       // 继续执行上移操作
//       this.shiftUp(parentIndex)
//     }
//   }

//   shiftDown(index) {
//     if (index === this.heap.length - 1) return
//     // 找到其子节点
//     const leftIndex = this.getLeftIndex(index)
//     const rightIndex = this.getRightIndex(index)
//     if (this.heap[leftIndex] <= this.heap[index]) {
//       //交换节点
//       this.swap(leftIndex, index)
//       // 继续执行下移操作
//       this.shiftDown(leftIndex)
//     }
//     if (this.heap[rightIndex] <= this.heap[index]) {
//       //交换节点
//       this.swap(rightIndex, index)
//       // 继续执行下移操作
//       this.shiftDown(rightIndex)
//     }
//   }
//   getSize() {
//     return this.heap.length
//   }
//   getFirst() {
//     return this.heap[0]
//   }
//   insert(val) {
//     this.heap.push(val)
//     // 执行上移操作
//     this.shiftUp(this.heap.length - 1)
//   }

//   //删除第一个节点
//   pop() {
//     this.heap[0] = this.heap.pop()
//     // 执行下移操作
//     this.shiftDown(0)
//   }
// }
// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// var findKthLargest = function (nums, k) {
//   const heap = new MinHeap()
//   nums.forEach((n) => {
//     heap.insert(n)
//     if (heap.getSize() > k) {
//       heap.pop()
//     }

//   })
//   return heap.getFirst()
// };

// console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))


// 最小堆，最大堆，更简单的解法
// 思想：分为插入和移除
/**
 * 插入节点时，把数字加入到数组尾部，循环比较当前数字与其父节点数字的大小，如果大于（或小于）其父节点的数字则交换数字，更新插入数字的下标
 * 移除节点时，堆底元素替换堆顶元素，堆顶元素执行向下交换操作
 */

class MinHeap {
  constructor() {
    this.heap = []
    this.length = 0
  }

  insert (num) {
    this.length++
    this.heap.push(num)
    if (this.length === 1) {
      return
    }
    let i = this.length - 1
    while (Math.floor(i / 2) >= 0 && this.heap[i] < this.heap[Math.floor(i / 2)]) {
      this.swap(i, Math.floor(i / 2))
      i = Math.floor(i / 2)
    }
  }

  swap (i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }

  remove () {
    let tmp = heap[0]
    this.heap[0] = this.heap.pop()
    this.length--
    this.heapify(0)
    return tmp
  }

  heapify (i) {
    while (true) {
      let min = i
      if (this.heap[i] > this.heap[i * 2 + 1]) {
        min = i * 2 + 1
      }
      if (this.heap[min] > this.heap[i * 2 + 2]) {
        min = i * 2 + 2
      }
      if (min === i) break
      this.swap(min, i)
      i = min
    }

  }
}

var findKthLargest = function (nums, k) {
  const heap = new MinHeap()
  nums.forEach((n) => {
    heap.insert(n)
    if (heap.length > k) {
      heap.remove()
    }

  })
  return heap.heap[0]
};

console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 2))

