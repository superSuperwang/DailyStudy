function getQuery (url) {
  let obj = {}
  let arr = url.split('?')[1].split('#')[0].split('&')
  for (let i = 0; i < arr.length; i++) {
    let query = arr[i].split('=')
    obj[query[0]] = query[1] || ''
  }
  return obj
}
let a = getQuery('http://sample.com/?a=1&e&b=2&c=xx&d#hash')
console.log(a)
