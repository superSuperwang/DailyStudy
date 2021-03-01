// 深拷贝
const rec = (obj) => {
  let deepObj = Array.isArray(obj) ? [] : {}
  if (typeof obj !== "object") {
    return obj
  }

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === "object") {
        deepObj[key] = rec(obj[key])
      } else {
        deepObj[key] = obj[key]
      }
    }
  }
  return deepObj
}
let obj = { a: { b: '1' } }
let obj1 = rec(obj)
obj1.a.b = 2
console.log(obj, obj1)
console.log(obj1)

