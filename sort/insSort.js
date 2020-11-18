const insSort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    const now = nums[i]
    let index = i
    while (index > 0) {
      if (nums[index - 1] > now) {
        nums[index] = nums[index - 1]
      } else {
        break
      }
      index--
    }
    nums[index] = now
  }
  return nums
}

let nums = [5, 4, 3, 2, 1]
console.log(insSort(nums))