export const validatePassword = () => {
  return (rule, value, callback) => {
    if (value.length < 6) {
      callback(new Error('密码长度不能少于六位'))
    } else {
      callback()
    }
  }
}
