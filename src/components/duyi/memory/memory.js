// https://www.bilibili.com/video/BV1g34y1c795/?spm_id_from=333.1007.tianma.1-1-1.click&vd_source=d45ec0638beff773cb15777eea2e0766
class MemorizeMap {
  constructor() {
    this._map = new Map()
    this._weakMap = new WeakMap() // 利用weakMap可以避免Map會無法gc的問題
  }

  _isObject(object) {
    return typeof object === 'object' && object != null
  }

  set(key, result) {
    if (this._isObject(key)) {
      this._weakMap.set(key, result)
    } else {
      this._map.set(key, result)
    }
  }
  get(key) {
    if (this._isObject(key)) {
      return this._weakMap.get(key)
    } else {
      return this._map.get(key)
    }
  }

  has(key) {
    if (this._isObject(key)) {
      return this._weakMap.has(key)
    } else {
      return this._map.has(key)
    }
  }
}
function memorize(func, resolve) {
  // resolve -> user can define their own key.
  function _memory(...args) {
    const key = typeof resolve === 'function' ? resolve(...args) : args[0]
    if (_memory.cache.has(key)) {
      return _memory.cache.get(key)
    }
    const result = func(...args)
    _memory.cache.set(key, result)
    return result
  }

  _memory.cache = new MemorizeMap()
  return _memory
}

const object = { a: 1, b: 3 }
const other = { c: 6, d: 9 }
const memorizeValue = memorize((obj) => Object.values(obj))

console.log(memorizeValue(object))
// [1, 3]

console.log(memorizeValue(other))
// [6, 9]

object.b = 10
console.log(memorizeValue(object))
// [1, 3]

memorizeValue.cache.set(object, ['a', 'b'])
console.log(memorizeValue(object))
// [a, b]
