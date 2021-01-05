Array.prototype.binarySearch = function (val) {
  let start = 0
  let end = this.length - 1
  while (start <= end) {
    let mid = start + ((end - start) >> 1)
    if (this[mid] > val) {
      end = mid - 1
    } else if (this[mid] < val) {
      start = mid + 1
    } else {
      return mid
    }
  }
  return -1
}
let arr = [1, 2, 3, 3, 3, 5]

// 二分查找变形
// 查找第一个符合的元素
Array.prototype.binarySearchFirst = function (val) {
  let start = 0
  let end = this.length - 1
  while (start <= end) {
    let mid = start + ((end - start) >> 1)
    if (this[mid] > val) {
      end = mid - 1
    } else if (this[mid] < val) {
      start = mid + 1
    } else {
      if ((mid === 0) || this[mid - 1] !== val) return mid
      end = mid - 1
    }
  }
  return -1
}

console.log(arr.binarySearchFirst(3))

// 查找第一个大于等于给定元素的下标
Array.prototype.search = function (val) {
  let low = 0
  let high = this.length - 1
  while (low <= high) {
    let mid = low + ((high - low) >> 1)
    if (this[mid] >= val) {
      if ((mid === 0) || this[mid - 1] < val) return mid
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
}
console.log([3, 4, 6, 7, 10].search(5))