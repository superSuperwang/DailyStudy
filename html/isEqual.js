function isObject (obj) {
  return typeof obj === 'object' && obj !== null
}
function isEqual (obj1, obj2) {
  if (!isObject(obj1) || !isObject(obj2)) {
    return obj1 === obj2
  }
  if (obj1 === obj2) {
    return true;
  }
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false
  }
  for (let key in obj1) {
    const res = isEqual(obj1[key], obj2[key])
    if (!res) { return false }
  }
  return true
}

let obj1 = [1, 2, 3]
let obj2 = [1, 2, 3]
console.log(isEqual(obj1, obj2))
