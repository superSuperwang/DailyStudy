// 手动实现apply
Object.prototype.applyTest = function (obj, args = []) {
  if (typeof obj !== 'object') {
    obj = window
  }

  const key = Symbol('fn')
  obj[key] = this
  let result = obj[key](...args)

  delete obj[key]
  return result

}
const obj = {
  a: 1,
  b: 2,
  sum: function (c, d) {
    return this.a + this.b + c + d
  }
}
let obj1 = { a: 3, b: 4 }
console.log(obj.sum.applyTest(obj1, [1, 2]))
