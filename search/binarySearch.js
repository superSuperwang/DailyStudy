Array.prototype.binarySearch = function (val) {
  let start = 0
  console.log(this)
  let end = this.length - 1
  while (start <= end) {
    let mid = Math.floor((end + start) / 2)
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
let arr = [1, 2, 3, 4, 5]
console.log(arr.binarySearch(4))

