const selSort = (nums) => {
  for (let i = 0; i < nums.length - 1; i++) {
    let minIndex = i
    const temp = nums[minIndex]
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j
      }
    }
    if (i !== minIndex) {
      nums[i] = nums[minIndex]
      nums[minIndex] = temp
    }

  }
  return nums
}
let nums = [5, 4, 3, 2, 1]
console.log(selSort(nums))