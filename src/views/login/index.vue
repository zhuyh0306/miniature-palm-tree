<template>
  <div class="login-con">
    <el-form
      ref="formRef"
      :model="loginForm"
      label-width="0px"
      class="demo-dynamic"
    >
      <h2>LOGIN</h2>
      <el-form-item prop="username">
        <!-- <el-input
          v-model="loginForm.username"
          placeholder="请输入用户名"
        ></el-input> -->
        <input type="text" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item prop="password">
        <!-- <el-input
          placeholder="请输入密码"
          type="password"
          v-model="loginForm.password"
        /> -->
        <input type="password" placeholder="请输入密码" />
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
const loginForm = ref({
  username: 'super-admin',
  password: '123456'
})
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
