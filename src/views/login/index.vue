<template>
  <div class="login-con">
    <el-form
      :model="loginForm"
      label-width="0px"
      :rules="rules"
      ref="formRef"
      class="demo-dynamic"
    >
      <h2>LOGIN</h2>
      <el-form-item prop="userName">
        <!-- <el-input
          v-model="loginForm.userName"
          placeholder="请输入用户名"
        ></el-input> -->
        <input
          type="text"
          v-model="loginForm.userName"
          placeholder="请输入用户名"
        />
      </el-form-item>
      <el-form-item prop="password" class="password-item">
        <!-- <el-input
          placeholder="请输入密码"
          type="password"
          v-model="loginForm.password"
        /> -->
        <input
          :type="passwordEyeClass"
          v-model="loginForm.password"
          placeholder="请输入密码"
        />
        <span class="svg-con">
          <svg-icon
            className="eye-open"
            @click="handleChangeEye"
            :icon="passwordEyeClass === 'password' ? 'eye-close' : 'eye-open'"
          ></svg-icon>
        </span>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(formRef)">登录</el-button>
        <!-- <button></button><br /> -->
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { validatePassword } from './rules'
const formRef = ref(null)
const passwordEyeClass = ref('password')
const loginForm = ref({
  userName: 'super-admin',
  password: '123456'
})
const rules = ref({
  userName: [
    {
      required: true,
      trigger: 'blur',
      message: '请输入用户名'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword()
    }
  ]
})
const handleChangeEye = () => {
  passwordEyeClass.value =
    passwordEyeClass.value === 'password' ? 'text' : 'password'
}
const submitForm = () => {
  formRef.value.validate(valid => {
    if (!valid) return
    console.log('校验成功')
  })
}
</script>
<style lang="scss" scoped>
.login-con {
  background: url('https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg')
    no-repeat;
  background-size: 100% 130%;
  height: calc(100vh);
  position: relative;
  padding-top: 10%;
  box-sizing: border-box;
}
.password-item {
  position: relative;
}
.svg-con {
  position: absolute;
  top: 5px;
  right: 53px;
}
.demo-dynamic {
  width: 20%;
  height: 400px;
  background-color: #00000060;
  margin: auto;
  text-align: center;
  border-radius: 10px;
  padding: 50px 50px;
}
span {
  color: #fff;
}

input {
  border: 0;
  width: 60%;
  font-size: 15px;
  color: #fff;
  background: transparent !important;
  border-bottom: 2px solid #fff;
  padding: 5px 10px;
  outline: none;
  margin-top: 10px;
}
h2 {
  color: #ffffff90;
  margin-top: 5%;
  font-size: 20px;
}
button {
  margin-top: 50px;
  width: 60%;
  height: 30px;
  border-radius: 10px;
  border: 0;
  color: #fff;
  text-align: center;
  line-height: 30px;
  font-size: 15px;
  background-image: linear-gradient(to right, #30cfd0, #330867);
}
</style>
