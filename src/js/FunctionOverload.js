// 函數重載
// https://www.bilibili.com/video/BV1ju4y127xX/?spm_id_from=333.999.0.0&vd_source=d45ec0638beff773cb15777eea2e0766
function createOverload() {
  const callBackMap = new Map()
  function overload(...args) {
    const key = args.map((a) => typeof a).join(',')

    const fn = callBackMap.get(key)
    if (fn) {
      return fn.apply(this, args)
    }

    throw new Error('could find function')
  }

  overload.impli = function (...args) {
    const fn = args.pop()
    if (!fn || typeof fn !== 'function') {
      return
    }

    const key = args.join(',')
    callBackMap.set(key, fn)
  }

  return overload
}

export { createOverloadoverload }
