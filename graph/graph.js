const graph = {
  2: [0, 3],
  0: [1, 2],
  1: [2],
  3: [3]
}

// 深度优先遍历
// const visited = new Set()
// const dfs = (n) => {
//   console.log(n)
//   visited.add(n)
//   graph[n].forEach((n) => {
//     if (!visited.has(n)) {
//       dfs(n)
//     }
//   })
// }
// dfs(2)

// 广度优先遍历
const bfs = (n) => {
  const visited = new Set()
  visited.add(n)
  const q = [n]
  while (q.length) {
    const n = q.shift()
    console.log(n)
    graph[n].forEach((n) => {
      if (!visited.has(n)) {
        q.push(n)
        visited.add(n)
      }

    })
  }
}
bfs(2)
