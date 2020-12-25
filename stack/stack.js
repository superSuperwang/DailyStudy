// 顺序栈
class Stack {
  constructor(n) {
    this.count = 0 // 栈中元素的个数
    this.stack = []// 栈
  }

  // 入栈操作
  push(n) {
    this.stack.push(n)
    this.count++
  }

  // 出栈
  pop() {
    if (this.count === 0) return
    this.stack.pop()
    this.count--
  }
}

// 链式栈
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

class LStack {
  constructor(n) {
    this.count = 0 // 栈中元素的个数
    this.stack = null// 栈
  }

  // 入栈操作
  push(n) {
    if (!this.stack) {
      this.stack = new ListNode(n)
    } else {
      let newNode = new ListNode(n)
      newNode.next = this.stack
      this.stack = newNode
    }
    this.count++
  }

  // 出栈
  pop() {
    if (this.count === 0) return
    this.stack = this.stack.next
    this.count--
  }
}


let stack = new LStack()
stack.push(1)
stack.push(2)
stack.pop()
stack.push(3)