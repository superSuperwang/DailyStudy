function getHeader (header) {
  let obj = {}
  let arr = header.split('\n')
  for (let i = 0; i < arr.length; i++) {
    let headerArr = arr[i].split(':')
    obj[headerArr[0]] = headerArr[1]
  }
  return obj
}
let b = getHeader(`Accept-Ranges: bytes
Cache-Control: max-age=6000, public
Connection: keep-alive
Content-Type: application/javascript`)
console.log(b)
