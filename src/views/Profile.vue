<template>
  <div class="profile-container">
    <div class="sidebar">
      <ul class="nav">
        <li><router-link to="/profile" class="nav-item">Profile</router-link></li>
        <li><router-link to="/settings" class="nav-item">Settings</router-link></li>
        <li><router-link to="/notifications" class="nav-item">Notifications</router-link></li>
        <li><router-link to="/userlist" class="nav-item">UserList</router-link></li>
      </ul>
    </div>
    
    <div class="profile-content">
      <div class="user-info">
        <img :src="user.avatar" alt="User Avatar" @click="triggerUpload" class="user-avatar"/>
        <input type="file" ref="avatarUpload" @change="changeAvatar" style="display: none;"/>
        <input type="text" v-model="userInfo.username" placeholder="Name"/>
        <input type="text" v-model="user.bio" placeholder="Bio"/>
        <input type="text" v-model="userInfo.phone" placeholder="Phone"/>
        <input type="email" v-model="userInfo.email" placeholder="Email"/>
        <textarea v-model="user.additionalInfo" placeholder="Additional Info"></textarea>
        <button @click="saveProfile">Save Profile</button>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Profile',
  data() {
    return {
      userInfo: {},
     
      user: {
        avatar: '/images/User.png',
        name: 'John Doe',
        bio: 'This is a bio.',
        phone: '123-456-7890',
        email: 'johndoe@example.com',
        additionalInfo: 'John Doe is a software engineer with over 10 years of experience...'
      },
    };
  },
  methods: {
    triggerUpload() {
      this.$refs.avatarUpload.click();
    },
    changeAvatar(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.user.avatar = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    saveProfile() {
      // 在这里实现保存逻辑，可能需要更新服务器上的用户资料
      alert('资料保存成功！');
    },
 
    fetchMyProfile() {

   
      const url = 'api/user-info/my-profile';
      const instance = axios.create();

      instance
        .get(url)
        .then(response => {
          this.userInfo = response.data; 
         
          console.log('用户信息:', this.userInfo);
        })
        .catch(error => {
          console.error('请求错误:', error);
        });
    },
  
  },
  created() {
    this.fetchMyProfile();
  },

};
</script>


<style scoped>
.profile-container {
  display: flex;
}

.sidebar {
  width: 200px;
  background-color: #f3f3f3;
  height: 100vh;
  padding-top: 20px;
}

.nav {
  list-style: none;
  padding: 0;
}

.nav-item {
  display: block;
  padding: 10px 15px;
  text-decoration: none;
  color: #333;
  transition: background-color .3s;
}

.nav-item:hover,
.nav-item.router-link-exact-active {
  background-color: #eaeaea;
}

.profile-content {
  flex-grow: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center; /* 确保子元素在交叉轴上居中 */
}

.user-info {
  width: 100%;
  max-width: 400px; /* 设置一个最大宽度以缩小输入框 */
  display: flex;
  flex-direction: column;
  align-items: center; /* 居中所有子元素 */
}

.user-avatar {
  cursor: pointer;
  width: 150px; /* 设置头像大小，可根据需要调整 */
  height: 150px; /* 设置头像大小，可根据需要调整 */
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px; /* 为头像下方留出空间 */
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%; /* 将输入框宽度设为100%以填充其父容器 */
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #45a049;
}
</style>
