// 循环队列
class CircularQueue {
  constructor(length) {
    this.head = 0
    this.tail = 0
    this.queue = []
    this.length = length

  }

  enqueue(n) {
    if ((this.tail + 1) % this.length === this.head) return
    this.queue.push(n)
    this.tail = (this.tail + 1) % this.length // 为了保持环状，当一直 + 1 直到 tail + 1 = n时，要重置tail = 0
  }

  dequeue() {
    if (this.tail === this.head) return
    this.queue.shift()
    this.head = (this.head + 1) % this.length
  }

}

// 顺序队列
class Queue {
  constructor(length) {
    this.head = 0
    this.tail = 0
    this.queue = new Array(length)
    this.length = length

  }

  enqueue(n) {
    if (this.tail === this.length) return
    this.queue[this.tail] = n
    this.tail++
  }

  dequeue() {
    if (this.tail === this.head) return
    this.queue.shift()
    this.head++
  }

}



// 链式队列
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

class Lqueue {
  constructor() {
    this.queue = {}
    this.head = null
    this.tail = null

  }

  enqueue(n) {
    // 如果队列为空，初始化值
    if (!Object.keys(this.queue).length) {
      this.queue = new ListNode(n)
      this.head = this.queue
      this.tail = this.queue
    } else {
      this.tail.next = new ListNode(n)
      this.tail = this.tail.next
    }

  }

  dequeue() {
    if (this.tail === this.head) return
    this.head = this.head.next
  }

}

const circularQueue = new Lqueue()
circularQueue.enqueue(1)
circularQueue.enqueue(2)
circularQueue.enqueue(3)
circularQueue.enqueue(4)
circularQueue.dequeue()
circularQueue.dequeue()