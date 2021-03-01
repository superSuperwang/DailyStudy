/**如果要排序数组中下标从 p 到 r 之间的一组数据，我们选择 p 到 r 之间的任意一个数据作为 pivot（分区点）。
 * 我们遍历 p 到 r 之间的数据，将小于 pivot 的放到左边，将大于 pivot 的放到右边，将 pivot 放到中间 */

// const quickSort = (nums) => {
//   const rec = (arr) => {
//     if (arr.length <= 1) {
//       return arr
//     }
//     const left = []
//     const right = []
//     const mid = arr[0]
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < mid) {
//         left.push(arr[i])
//       } else if (arr[i] > mid) {
//         right.push(arr[i])
//       }
//     }
//     return [...rec(left), mid, ...rec(right)]
//   }
//   return rec(nums)
// }

// 原地排序
// const quickSort = (nums) => {
//   const rec = (arr, p, r) => {
//     if (p >= r) return
//     const provit = arr[r]
//     let i = p
//     for (let j = p; j < r; j++) {
//       if (arr[j] < provit) {
//         [arr[i], arr[j]] = [arr[j], arr[i]]
//         i++
//       }
//     }
//     let tmp = arr[r]
//     arr[r] = arr[i]
//     arr[i] = tmp
//     rec(arr, 0, i - 1)
//     rec(arr, i + 1, r)
//   }
//   rec(nums, 0, nums.length - 1)
// }


// const nums = [2, 3, 4, 5, 1]
// quickSort(nums)
// console.log(nums)

/**如果要排序数组中下标从 p 到 r 之间的一组数据，我们选择 p 到 r 之间的任意一个数据作为 pivot（分区点）。
 * 我们遍历 p 到 r 之间的数据，将小于 pivot 的放到左边，将大于 pivot 的放到右边，将 pivot 放到中间 */
// const quickSort = (arr) => {
//   const rec = (arr, p, r) => {
//     if (p >= r) return
//     const provit = arr[r]
//     let i = p
//     for (let j = p; j < r; j++) {
//       if (arr[j] < provit) {
//         [arr[i], arr[j]] = [arr[j], arr[i]]
//         i++
//       }
//     }
//     [arr[i], arr[r]] = [arr[r], arr[i]]
//     rec(arr, p, i - 1)
//     rec(arr, i + 1, r)
//   }
//   rec(arr, 0, arr.length - 1)
// }

// const nums = [2, 3, 4, 5, 1]
// quickSort(nums)
// console.log(nums)
var findKthLargest = function (nums, k) {
  const rec = (nums, p, r) => {
    if (p >= r) return
    let provit = nums[r]
    let i = p
    for (let j = p; j < r; j++) {
      if (nums[j] > provit) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
        i++
      }
    }
    [nums[i], nums[r]] = [nums[r], nums[i]]
    if (i === k - 1) {
      return nums[i]
    } else if (i < k - 1) {
      return rec(nums, i + 1, r)
    } else {
      return rec(nums, p, i - 1)
    }
  }
  return rec(nums, 0, nums.length - 1)

};

findKthLargest([3, 2, 1, 5, 6, 4], 2)
