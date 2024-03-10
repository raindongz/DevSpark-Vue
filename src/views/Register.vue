<template>
    <div class="register-container">
      <h1>Register</h1>
      <form @submit.prevent="register">
        <!-- 注册表单输入 -->
        <input type="text" placeholder="Username" v-model="username">
        <input type="email" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <!-- 注册按钮 -->
        <button type="submit">Register</button>
      </form>
      <!-- 登录页面链接 -->
      <router-link to="/login" class="account-exists-link">Already have an account? Login</router-link>
    </div>
  </template>
  
  <script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Register',
    data() {
      return {
        username: '',
        email: '',
        password: ''
      }
    },
    methods: {
      register() {
        // 执行注册逻辑
        // 如果注册成功，可能需要重定向到登录页面或主页
        this.$router.push('/login');
      }
    }
  }
  </script>
  
  <style scoped>
  .register-container {
    max-width: 300px;
    margin: 40px auto;
    padding: 20px;
    text-align: center;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .register-container h1 {
    margin-bottom: 20px;
    color: #333;
  }
  
  .register-container form {
    display: flex;
    flex-direction: column;
  }
  
  .register-container input {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-sizing: border-box;
  }
  
  .register-container button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #5cb85c;
    color: white;
    cursor: pointer;
    font-size: 1rem; /* Ensure the button font size matches links */
  }
  
  .register-container button:hover {
    background-color: #4cae4c;
  }
  
  .account-exists-link {
    display: block; /* 占满一行 */
    margin-top: 15px;
    color: #d3d3d3; /* 淡灰色字体 */
    text-decoration: none; /* 去除下划线 */
    transition: color 0.3s, background-color 0.3s; /* 颜色和背景颜色变化的过渡 */
    padding: 10px; /* 增加填充，使其看起来更像按钮 */
    border-radius: 5px; /* 边框圆角 */
    font-size: 1rem; /* Matching font size with button */
  }
  
  .account-exists-link:hover {
    color: #a9a9a9; /* 悬浮时的字体颜色 */
    background-color: #f0f0f0; /* 悬浮时的背景颜色 */
  }
  </style>
  