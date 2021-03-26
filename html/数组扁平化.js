let arr = [1, [2, 3]]

function flatten (arr) {
  let copy = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      copy = copy.concat(flatten(arr[i]))
    } else {
      copy.push(arr[i])
    }
  }
  return copy
}

let c = flatten(arr)
console.log(c)
