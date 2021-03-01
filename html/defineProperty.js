const orginalProto = Array.prototype;
const arrayProto = Object.create(orginalProto); // 先克隆一份Array的原型出来
const methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
methodsToPatch.forEach(method => {
  arrayProto[method] = function () {
    // 执行原始操作
    orginalProto[method].apply(this, arguments)
    console.log('监听赋值成功', method)
  }
})


function defineProperty (obj, key, val) {
  observer(val)
  Object.defineProperty(obj, key, {
    get: function () {
      console.log(`收集${key}的依赖`)
      return val
    },
    set: function (newVal) {
      if (newVal === val) {
        return
      }
      console.log('触发更新', newVal)
      val = newVal
      observer(val)
    }
  });
}

function observer (data) {
  if (typeof data !== 'object' || data === null) {
    return
  }

  if (Array.isArray(data)) {
    // 如果是数组, 重写原型
    data.__proto__ = arrayProto
    // 传入的数据可能是多维度的,也需要执行响应式
    for (let i = 0; i < data.length; i++) {
      observer(data[i])

    }
  } else {
    for (const key in data) {
      // 给对象中的每一个方法都设置响应式
      defineProperty(data, key, data[key])

    }
  }
}

// 创建观察者类

const data = {
  doSom: {
    eat: true
  },
  todoList: ['吃饭', '睡觉']
};

observer(data)
data.todoList.push('学习');
