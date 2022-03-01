import request from '../utils/request'

export function uploadAvatar(data) {
  return request({
    url: `/user/upload`,
    method: 'post',
    data
  })
}
export default {
  uploadAvatar
}
