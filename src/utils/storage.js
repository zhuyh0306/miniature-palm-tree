import { isBlank } from './utils'
/**
 * @public
 * @function
 * @todo  存入数据到缓存中
 * @param {String} key 属性名
 * @param {Any} data 值
 * @param {String} type 存入类型 可选值（session local）,默认session
 * @memberof Cain
 */
export function setStorage(key, data, type = 'session') {
  let storage = sessionStorage
  if (type === 'local') {
    storage = localStorage
  }
  if (typeof data === 'object') {
    storage.setItem(key, JSON.stringify(data))
  } else {
    storage.setItem(key, data)
  }
}
/**
 * @public
 * @function
 * @todo  从缓存中获取数据
 * @param {String} key 属性名
 * @param {String} type 存入类型 可选值（session local ）,默认session
 * @memberof Cain
 */
export function getStorage(key, type = 'session') {
  let storage = sessionStorage
  if (type === 'local') {
    storage = localStorage
  }
  if (isBlank(storage.getItem(key))) {
    return ''
  }
  try {
    return JSON.parse(storage.getItem(key))
  } catch (error) {
    console.info(`${key} is not parse`)
  }
  return storage.getItem(key)
}
/**
 * @public
 * @function
 * @todo  从缓存中移除数据
 * @param {String} key 属性名
 * @param {String} type 存入类型 可选值（session local）,默认session
 * @memberof Cain
 */
export function removeStorage(key, type = 'session') {
  let storage = sessionStorage
  if (type === 'local') {
    storage = localStorage
  }
  return storage.removeItem(key)
}
/**
 * @public
 * @function
 * @todo  从缓存中移除数据
 * @param {String} key 属性名
 * @param {String} type 存入类型 可选值（session local）,默认session
 * @memberof Cain
 */
export function removeAllStorage(key, type = 'session') {
  let storage = sessionStorage
  if (type === 'local') {
    storage = localStorage
  }
  return storage.clear()
}
export default {
  getStorage,
  setStorage,
  removeStorage,
  removeAllStorage
}
