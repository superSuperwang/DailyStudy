// bind
function bindCopy () {
  let context = Array.from(arguments)[0]
  let args = Array.from(arguments).slice(1)
  let self = this
  return function () {
    let arr = args.concat(Array.from(arguments))
    return self.apply(context, arr)
  }
}

Function.prototype.bindCopy = bindCopy

// function fn1 (a, b, c) {
//   console.log('this', this)
//   console.log(a, b, c)
//   return 'this is fn1'
// }
// const fn2 = fn1.bindCopy({ x: 100 }, 10, 20)
// console.log(fn2(30))

// 手写promise.all
function all (promises) {
  if (!(promises instanceof Array)) {
    return
  }
  return new Promise(function (resolve, reject) {
    let now = 0
    let result = []
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then((res) => {
        now++
        result.push(res)
        if (now === promises.length) {
          return resolve(result)
        }
      }).catch((err) => {
        return reject(err)
      })
    }
  })

}
// let p1 = new Promise(function (resolve, reject) {
//   console.log('p1')
//   resolve('p1')
// })
// let p2 = new Promise(function (resolve, reject) {
//   console.log('p2')
//   reject('p2')
// })
// all([p1, p2]).then((result) => {
//   console.log(result)
// }).catch((err) => {
//   console.log(err)
// })

// 手写instanceof
function instanceOf (a, b) {
  let l = a.__proto__
  while (l) {
    if (l === b.prototype) {
      return true
    }
    l = l.__proto__
  }
  return false
}

console.log(instanceOf([1, 2, 3], Function))

// 利用ajax发送post请求
function post (url, data) {
  let xhr = new XMLHttpRequest()
  xhr.open('POST', url)
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status == 200) {
      console.log(xhr.responseText)
    }
  }
  xhr.send(data)
}

