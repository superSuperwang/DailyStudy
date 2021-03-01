/**将数组第一个数作为有序，后面的数依次与前面已排好的数比较 */

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
