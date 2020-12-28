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
const quickSort = (nums) => {
  const rec = (arr, p, r) => {
    if (p >= r) return
    const provit = arr[r]
    let i = p
    for (let j = p; j < r; j++) {
      if (arr[j] < provit) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
        i++
      }
    }
    let tmp = arr[r]
    arr[r] = arr[i]
    arr[i] = tmp
    rec(arr, 0, i - 1)
    rec(arr, i + 1, r)
  }
  rec(nums, 0, nums.length - 1)
}


const nums = [2, 3, 4, 5, 1]
quickSort(nums)
console.log(nums)