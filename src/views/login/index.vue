<template>
  <div class="login-con" v-loading="loading">
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
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { validatePassword } from './rules'
import { setTimeStamp } from '@/utils/utils'
const formRef = ref(null)
const passwordEyeClass = ref('password')
const store = useStore()
const loading = ref(false)
const router = new useRouter()
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
    // loading.value = true
    store
      .dispatch('sys/login', {
        user: loginForm.value.userName,
        password: loginForm.value.password
      })
      .then(res => {
        console.log('登录成功', res)
        setTimeStamp()
        router.push('/')
      })
  })
}
</script>
<style lang="scss" scoped>
.login-con {
  position: relative;
  box-sizing: border-box;
  height: calc(100vh);
  padding-top: 10%;
  background: url('https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg')
    no-repeat;
  background-size: 100% 130%;
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
  padding: 50px 50px;
  margin: auto;
  text-align: center;
  background-color: #000060;
  border-radius: 10px;
}
span {
  color: #fff;
}

input {
  width: 60%;
  padding: 5px 10px;
  margin-top: 10px;
  color: #fff;
  font-size: 15px;
  background: transparent !important;
  border: 0;
  border-bottom: 2px solid #fff;
  outline: none;
}
h2 {
  margin-top: 5%;
  color: #fff;
  font-size: 20px;
}
button {
  width: 60%;
  height: 30px;
  margin-top: 50px;
  color: #fff;
  font-size: 15px;
  line-height: 30px;
  text-align: center;
  background-image: linear-gradient(to right, #30cfd0, #330867);
  border: 0;
  border-radius: 10px;
}
</style>
