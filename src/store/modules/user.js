import { uploadAvatar } from '@/service/user'
export default {
  actions: {
    uploadAvatar(context, payload) {
      return uploadAvatar(payload)
    }
  }
}
