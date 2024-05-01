<template>
  <div class="login-container">
    <h1>Login</h1>
    <div class="login_form">
      <!-- 登录表单输入 -->
      <input type="text" placeholder="Username" v-model="username" />
      <input type="password" placeholder="Password" v-model="password" />
      <!-- 登录按钮 -->
      <button @click="loginUser">Login</button>
      <RouterLink to="/register" class="tosignup">
        Click here to Sign Up</RouterLink
      >
    </div>
    <!-- 游客登录链接 -->
    <!-- <router-link to="/" class="auth-link guest-login-btn">Guest Login</router-link> -->
    <!-- 注册页面链接 -->
    <!-- <router-link to="/register" class="auth-link register-btn">Register</router-link> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    loginUser() {
      // 执行登录逻辑
      const instance = axios.create();
      const requestData = {
        username: this.username,
        password: this.password,
      };

      instance
        .post("api/user/login", requestData, {
          headers: {
            Authorization: null,
          },
        })
        .then((response) => {
          console.log(response);
          if (response.statusText === "OK" || response.status === 200) {
            const token = JSON.stringify(response.data.token);
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] =
              "Bearer " + JSON.parse(token);
            //如果登录成功，重定向到主页
            this.$router.push("/");
            // 在这里调用 getUserInfo 方法
            this.getUserInfo();
          }
          this.userData = response.data;
        })
        .catch((error) => {
          console.error("Error:", error);
          this.username = "";
          this.password = "";
        });
    },
    // 登录后将用户信息存入localStorage
    getUserInfo() {
      axios.get('api/user-info/my-profile')
          .then(response => {
            // 将response.data对象转换为JSON字符串
            const userInfoJson = JSON.stringify(response.data);
            // 将JSON字符串存储在localStorage中，键为"user"
            localStorage.setItem("user", userInfoJson);
          })
    },
  },
};
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

.login_form {
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
