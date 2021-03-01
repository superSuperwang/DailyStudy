function instantsOf (a, b) {
  let l = a.__proto__
  while (l) {
    if (l === b.prototype) {
      return true
    }
    l = l.__proto__
  }
  return false
}
