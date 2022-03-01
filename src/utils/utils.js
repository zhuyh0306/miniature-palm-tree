import { TIME_STAMP, TOKEN_TIMEOUT_VALUE } from '@/constant'
import { getStorage, setStorage } from '@/utils/storage'
/**
 * @public
 * @function
 * @todo 判断是否为空
 * @memberof Cain
 * @param {Object} obj 需要校验对象
 */
export function isBlank(obj) {
  if (
    typeof obj === 'undefined' ||
    obj === undefined ||
    obj == null ||
    obj === 'null' ||
    obj === 'undefined' ||
    obj === '' ||
    obj.length === 0
  ) {
    return true
  }
  if (typeof obj === 'object' && obj.length === undefined) {
    // eslint-disable-next-line no-restricted-syntax
    for (const name in obj) {
      return false
    }
    return true
  }
  return false
}

/**
 * 获取时间戳
 */
export function getTimeStamp() {
  return getStorage(TIME_STAMP)
}
/**
 * 设置时间戳
 */
export function setTimeStamp() {
  setStorage(TIME_STAMP, Date.now())
}
/**
 * 是否超时
 */
export function isCheckTimeout() {
  // 当前时间戳
  var currentTime = Date.now()
  // 缓存时间戳
  var timeStamp = getTimeStamp()
  return currentTime - timeStamp > TOKEN_TIMEOUT_VALUE
}

export default {
  isBlank
}
