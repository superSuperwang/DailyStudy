const merSort = (nums) => {
  // 对数组分组
  const rec = (nums) => {
    if (nums.length === 1) {
      return nums
    }
    const mid = Math.floor(nums.length / 2)
    const left = nums.slice(0, mid)
    const right = nums.slice(mid)
    const leftSort = rec(left)
    const rightSort = rec(right)
    const res = []
    while (leftSort.length || rightSort.length) {
      if (leftSort.length && rightSort.length) {
        res.push(leftSort[0] < rightSort[0] ? leftSort.shift() : rightSort.shift())
      } else if (leftSort.length) {
        res.push(leftSort.shift())
      } else if (rightSort.length) {
        res.push(rightSort.shift())
      }

    }
    return res
  }
  return rec(nums)
}
let nums = [5, 4, 2, 1]
console.log(merSort(nums))

// 时间复杂度 O(nlogn) 