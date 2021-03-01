/*思想：如果要排序一个数组，我们先把数组从中间分成前后两部分，然后对前后两部分分别排序，再将排好序的两部分合并在一起，这样整个数组就都有序了 */

// const merSort = (nums) => {
//   // 对数组分组
//   const rec = (nums) => {
//     if (nums.length === 1) {
//       return nums
//     }
//     const mid = Math.floor(nums.length / 2)
//     const left = nums.slice(0, mid)
//     const right = nums.slice(mid)
//     const leftSort = rec(left)
//     const rightSort = rec(right)
//     const res = []
//     while (leftSort.length || rightSort.length) {
//       if (leftSort.length && rightSort.length) {
//         res.push(leftSort[0] <= rightSort[0] ? leftSort.shift() : rightSort.shift())
//       } else if (leftSort.length) {
//         res.push(leftSort.shift())
//       } else if (rightSort.length) {
//         res.push(rightSort.shift())
//       }

//     }
//     return res
//   }
//   return rec(nums)
// }
// let nums = [5, 4, 2, 1]
// console.log(merSort(nums))

// 时间复杂度 O(nlogn)
const merSort = (arr) => {
  const rec = (arr, p, r) => {
    if (p >= r) {
      return [arr[p]]
    }
    const mid = Math.floor((p + r) / 2)
    const rightSort = rec(arr, p, mid)
    const leftSort = rec(arr, mid + 1, r)

    const sort = []
    while (rightSort.length || leftSort.length) {
      if (rightSort.length && leftSort.length) {
        sort.push(rightSort[0] > leftSort[0] ? leftSort.shift() : rightSort.shift())
      } else if (leftSort.length) {
        sort.push(leftSort.shift())
      } else if (rightSort.length) {
        sort.push(rightSort.shift())
      }
    }
    return sort
  }
  return rec(arr, 0, arr.length - 1)
}

console.log(merSort([5, 4, 3, 2, 1]))
