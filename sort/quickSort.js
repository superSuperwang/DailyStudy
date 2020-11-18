const quickSort = (nums) => {
  const rec = (arr) => {
    if (arr.length <= 1) {
      return arr
    }
    const left = []
    const right = []
    const mid = arr[0]
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < mid) {
        left.push(arr[i])
      } else if (arr[i] > mid) {
        right.push(arr[i])
      }
    }
    return [...rec(left), mid, ...rec(right)]
  }
  return rec(nums)
}

const nums = [2, 3, 4, 5, 1]
console.log(quickSort(nums))