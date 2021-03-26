// function isObject (obj) {
//   return typeof obj === 'object' && obj !== null
// }
// function isEqual (obj1, obj2) {
//   // 任意一个不是对象直接返回
//   if (!isObject(obj1) || !isObject(obj2)) {
//     return obj1 === obj2
//   }
//   // 全等为true
//   if (obj1 === obj2) {
//     return true;
//   }
//   // 属性个数不一致直接返回
//   if (Object.keys(obj1).length !== Object.keys(obj2).length) {
//     return false
//   }
//   for (let key in obj1) {
//     const res = isEqual(obj1[key], obj2[key])
//     if (!res) { return false }
//   }
//   return true
// }

// let obj1 = [1, 2, 3]
// let obj2 = [1, 2, 3]
// console.log(isEqual(obj1, obj2))

function isEqual (obj1, obj2) {
  if (!(obj1 instanceof Object) || !(obj2 instanceof Object)) {
    return obj1 === obj2
  }
  if (obj1 === obj2) {
    return true
  }
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false
  }

  for (let key in obj1) {
    let res = isEqual(obj1[key], obj2[key])
    if (!res) { return false }
  }
  return true
}

let obj1 = { a: 1, b: { c: 2 } }
let obj2 = { a: 1, b: { c: 3 } }
console.log(isEqual(obj1, obj2))
