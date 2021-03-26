var generateParenthesis = function (n) {
  let res = []
  const dfs = (l, r, str) => {
    if (str.length === 2 * n) {
      res.push(str)
      return
    }

    // 如果有左括号就把它加入str
    if (l) {
      dfs(l - 1, r, str + '(')
    }

    // 如果右括号的个数大于左括号的个数就把它加入str
    if (r > l) {
      dfs(l, r - 1, str + ')')
    }
  }
  dfs(n, n, '')
  return res
}

generateParenthesis(2)


