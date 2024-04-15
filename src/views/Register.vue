<template>
  <div class="register-container">
    <h1>Register</h1>
    <div class="register_user">
      <!-- 注册表单输入 -->
      <input type="text" placeholder="Username" v-model="username" />
      <input type="password" placeholder="Password" v-model="password" />
      <input type="email" placeholder="Email" v-model="email" />
      <input type="number" placeholder="age" v-model="age" />
      <select v-model="jobTitle" id="engineerList" class="select_job_title">
        <option
          v-for="(engineer, index) in engineerList"
          :key="index"
          :value="index"
        >
          {{ engineer }}
        </option>
      </select>
      <select v-model="favLanguage" id="languageList" class="select_language">
        <option value="" selected>Select Age</option>
        <option
          v-for="(language, index) in programmingLanguages"
          :key="index"
          :value="index"
        >
          {{ language }}
        </option>
      </select>
      <div>
        <input type="radio" id="zero" value="0" v-model="gender" />
        <label for="zero">Male</label>
        <input type="radio" id="one" value="1" v-model="gender" />
        <label for="one">Female</label>
      </div>
      <h3>optional:</h3>
      <input type="text" placeholder="avatars" v-model="avatars" />
      <input type="text" placeholder="favFramework" v-model="favFramework" />
      <input type="text" placeholder="githubUrl" v-model="githubUrl" />
      <select v-model="mbtiType" id="mbtiList" class="select_mbti">
        <option value="" disabled hidden>Select an MBTI type</option>
        <option v-for="(mbti, index) in mbtiTypes" :key="index" :value="index">
          {{ mbti }}
        </option>
      </select>
      <input type="text" placeholder="technicalTags" v-model="technicalTags" />
      <input type="text" placeholder="nonTechTags" v-model="nonTechTags" />
      <input
        type="text"
        placeholder="selfDescription"
        v-model="selfDescription"
      />
      <!-- 注册按钮 -->
      <button @click="register">Register</button>
    </div>
    <!-- 登录页面链接 -->
    <router-link to="/login" class="account-exists-link"
      >Already have an account? Login</router-link
    >
  </div>
</template>

<script>
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Register",
  data() {
    return {
      username: "",
      password: "",
      email: "",
      gender: 0,
      age: null,
      engineerList: [
        "Select a job title",
        "Software Engineer",
        "Systems Engineer",
        "Network Engineer",
        "DevOps Engineer",
        "Data Engineer",
        "Quality Assurance Engineer (QA Engineer)",
        "Test Engineer",
        "Frontend Engineer",
        "Backend Engineer",
        "Full Stack Engineer",
        "Site Reliability Engineer (SRE)",
        "Security Engineer",
        "Machine Learning Engineer",
        "Automation Engineer",
        "Cloud Engineer",
        "Embedded Systems Engineer",
        "UI/UX Engineer",
        "Infrastructure Engineer",
        "Integration Engineer",
        "Application Engineer",
      ],
      jobTitle: 0,
      programmingLanguages: [
        "Select your fav programming language",
        "Python",
        "Java",
        "JavaScript",
        "C#",
        "C++",
        "PHP",
        "Swift",
        "TypeScript",
        "Ruby",
        "Go",
        "Kotlin",
        "Rust",
        "Perl",
        "Scala",
        "Dart",
        "Shell",
        "Lua",
        "R",
        "MATLAB",
        "SQL",
      ],
      favLanguage: 0,
      mbtiTypes: [
        "Select your mbti type",
        "ISTJ",
        "ISFJ",
        "INFJ",
        "INTJ",
        "ISTP",
        "ISFP",
        "INFP",
        "INTP",
        "ESTP",
        "ESFP",
        "ENFP",
        "ENTP",
        "ESTJ",
        "ESFJ",
        "ENFJ",
        "ENTJ",
      ],
      mbtiType: 0,
      phone: null,
      avatars: null,
      favFramework: null,
      githubUrl: null,
      technicalTags: null,
      nonTechTags: null,
      selfDescription: null,
    };
  },
  methods: {
    register() {
      // 执行注册逻辑
      const instance = axios.create();
      const requestData = {
        username: this.username,
        hashedPassword: this.password,
        email: this.email,
        gender: this.gender,
        age: this.age,
        jobTitle: this.jobTitle,
        favLanguage: this.favLanguage,

        phone: this.phone,
        avatars: this.avatars,
        favFramework: this.favFramework,
        githubUrl: this.githubUrl,
        mbtiType: this.mbtiType,
        technicalTags: "1,2,3",
        nonTechTags: "1,2,3",
        selfDescription: this.selfDescription,
      };

      instance
        .post("api/user/create", requestData, {
          headers: {
            Authorization: null,
          },
        })
        .then((response) => {
          console.log(response);
          if (response.statusText === "OK" || response.status === 200) {
            //如果注册成功，重定向到主页
            this.$router.push("/login");
          }
          this.userData = response.data;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
};
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

.register_user {
  display: flex;
  flex-direction: column;
}

.select_mbti {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
}
.register-container input {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
}

.select_job_title {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
}

.select_language {
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
