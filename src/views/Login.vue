<template>
    <div class="login-container">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <!-- 登录表单输入 -->
        <input type="text" placeholder="Username" v-model="username">
        <input type="password" placeholder="Password" v-model="password">
        <!-- 登录按钮 -->
        <button type="submit">Login</button>
      </form>
      <!-- 游客登录链接 -->
      <router-link to="/" class="auth-link guest-login-btn">Guest Login</router-link>
      <!-- 注册页面链接 -->
      <router-link to="/register" class="auth-link register-btn">Register</router-link>
    </div>
  </template>
  
  <script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Login',
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login() {
        // 执行登录逻辑
        // 如果登录成功，重定向到主页
        this.$router.push('/');
      }
    }
  }
  </script>
  
  <style scoped>
  .login-container {
    max-width: 300px;
    margin: 40px auto;
    padding: 20px;
    text-align: center;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .login-container h1 {
    margin-bottom: 20px;
    color: #333;
  }
  
  .login-container form {
    display: flex;
    flex-direction: column;
  }
  
  .login-container input {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-sizing: border-box;
  }
  
  .login-container button,
  .auth-link {
    padding: 10px;
    margin-top: 10px;
    border: none;
    border-radius: 5px;
    background-color: #5cb85c;
    color: white;
    cursor: pointer;
    font-size: 1rem; /* 字号调整 */
    text-decoration: none;
    display: block;
  }
  
  .login-container button:hover {
    background-color: #4cae4c;
  }
  
  .auth-link {
    background-color: #5cb85c;
    text-align: center;
  }
  
  .auth-link:hover {
    background-color: #5cb85c;
  }
  </style>
  