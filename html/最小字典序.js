function isMin (S) {
  let arr = S.split('');
  let T = ''
  let l = 0
  let r = S.length - 1
  while (l <= r) {
    let left = false
    for (let i = 0; l + i <= r; i++) {
      if (arr[l + i] < arr[r - i]) {
        left = true
        break
      } else if (arr[l + i] > arr[r - i]) {
        left = false
        break
      }
    }
    if (left) {
      T += arr[l]
      l++
    } else {
      T += arr[r]
      r--
    }
  }
  return T
}
console.log(isMin('123421'))

