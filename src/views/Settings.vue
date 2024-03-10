<template>
  <div class="profile-container">
    <!-- 侧边栏 -->
    <div class="sidebar">
      <ul class="nav">
        <li><router-link to="/profile" class="nav-item">Profile</router-link></li>
        <li><router-link to="/settings" class="nav-item">Settings</router-link></li>
        <li><router-link to="/notifications" class="nav-item">Notifications</router-link></li>
        <li><router-link to="/userlist" class="nav-item">UserList</router-link></li>
      </ul>
    </div>
    <!-- 设置内容 -->
    <div class="settings-content">
      <div class="settings-container">
        <h2>Settings</h2>
        <form @submit.prevent="updateSettings">
          <div class="setting-item">
            <label for="theme">Theme Mode:</label>
            <select id="theme" v-model="settings.theme">
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          <div class="setting-item">
            <label for="username">Username:</label>
            <input id="username" type="text" v-model="settings.username">
          </div>
          <div class="setting-item">
            <label for="email">Email:</label>
            <input id="email" type="email" v-model="settings.email">
          </div>
          <div class="setting-item">
            <label for="password">Password:</label>
            <input id="password" type="password" v-model="settings.password">
          </div>
          <button type="submit" class="update-button">Update Settings</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Settings',
  data() {
    return {
      settings: {
        theme: 'light',
        username: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    updateSettings() {
      // 实现你的更新逻辑
      console.log('Settings updated:', this.settings);
    },
  },
};
</script>


<style scoped>
.settings-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  border-radius: 8px;
}

.setting-item {
  margin-bottom: 1rem;
}

.setting-item label {
  display: block;
  margin-bottom: 0.5rem;
}

.setting-item input[type="text"],
.setting-item input[type="email"],
.setting-item input[type="password"],
.setting-item select {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.update-button {
  padding: 0.5rem 1rem;
  border: none;
  background-color: #3498db;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

.update-button:hover {
  background-color: #2980b9;
}
.profile-container {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 200px;
  background-color: #f3f3f3;
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

.settings-content {
  flex-grow: 1;
  padding: 20px;
}

.settings-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  border-radius: 8px;
}
</style>
