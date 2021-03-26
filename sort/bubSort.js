const bubSort = (nums) => {
  for (let i = 0; i < nums.length - 1; i++) {
    let flag = false
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        let tmp = nums[j]
        nums[j] = nums[j + 1]
        nums[j + 1] = tmp
        flag = true
      }
    }
    if (!flag) {
      break
    }
  }
}
const nums = [4, 1, 2, 3]
bubSort(nums)
