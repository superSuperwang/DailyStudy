/**
 * 使用Proxy 监听对象
 * @param {*} obj
 */
function reactive (obj = {}) {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }
  const proxyConf = {
    get (target, key, receiver) {
      //该函数内,在处理数组时,会回调数组原型的push/pop方法
      //所以这里只处理 data本身(非原型) 的属性即可
      const keys = Reflect.ownKeys(target)
      if (keys.includes(key)) {
        //这里只处理对象本身key值
        console.log('get', key)
      }
      const result = Reflect.get(target, key, receiver)
      //性能监听:Object.defineProperty 是一次性监听完
      // 而Proxy监听是get 时候去监听的,仅仅监听当前获取的值的层级,什么时候监听到,什么时候去监听
      return reactive(result) //返回结果 *深度监听*
    },
    set (target, key, value, receiver) {
      //遇到重复 key不处理
      //插入新数组元素,会自动修改length,此处也会回调,多此一举
      //因此在插入新元素的时候,新值与旧值一致.则不处理

      const oldVal = target[key]
      if (oldVal === value) {
        return true
      }

      const keys = Reflect.ownKeys(target)
      if (keys.includes(key)) {
        //这里只处理对象本身key值
        console.log('set 已有的key', key)
      } else {
        console.log('set 新增的key', key)
      }
      const result = Reflect.set(target, key, value, receiver)
      console.log('set', key, value)
      return result //是否设置成功
    },
    deleteProperty (target, key) {
      const result = Reflect.deleteProperty(target, key)
      console.log('delete', key)
      return result //是否删除成功
    },
  }
  const observered = new Proxy(obj, proxyConf)
  return observered
}
const data = {
  name: 'zhangsan',
  age: 29,
  info: {
    a: 23,
  },
}
const proxyData = reactive(data)
