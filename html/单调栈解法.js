// 1. 单调栈训练
// 题目描述
// 给定一个无序数组，返回一个数组。返回的数组的第i个位置的值应当是，对于原数组中的第i个元素，至少往右走多少步，才能遇到一个比自己大的元素
// 例：[5,3,1,2,4]  [-1,3,1,1,-1]
// 题解：维护一个单调递减的栈，入栈一个元素就，将这个元素和栈尾比较，如果当前元素比栈尾大，则将栈尾出栈，并记录栈尾下标的值

function getNum (arr) {
  let res = new Array(arr.length).fill(-1);
  // 维护一个单调递减的栈
  let stack = []
  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[i] > arr[stack[stack.length - 1]]) {
      res[stack[stack.length - 1]] = i - stack[stack.length - 1]
      stack.pop()
    }
    stack.push(i)
  }
  return res
}
// console.log(getNum([5, 3, 1, 2, 4]))

// 题目描述
// 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。求在该柱状图中，能够勾勒出来的矩形的最大面积。
// 例：[2,1,5,6,2,3] 10
function largestRectangleArea (heights) {

}
