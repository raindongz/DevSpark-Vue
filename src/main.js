import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

let token = localStorage.getItem("token");
if (token) {
  console.log(token);
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
}
// 用于前端接收到后端返回401（未授权，token过期）时跳转到登录页面
axios.interceptors.response.use(
    response => {
      // 如果响应是成功的，直接返回response
      return response;
    },
    error => {
      // 检查错误状态码
      if (error.response && error.response.status === 401) {
        // 如果返回401状态码，重定向到/login
        router.push('/login');
      }
      // 返回任何非401的错误
      return Promise.reject(error);
    }
);
const app = createApp(App);

app.use(router);

app.mount("#app");
