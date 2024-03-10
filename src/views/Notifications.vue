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
    <!-- 通知页面内容 -->
    <div class="notification-page">
      <div class="notification-title">Notifications</div>
      <div class="notification-list">
        <div class="notification-card" v-for="notification in notifications" :key="notification.id">
          <div class="notification-content">
            <p class="notification-description">{{ notification.message }}</p>
            <p class="notification-timestamp">{{ notification.timestamp }}</p>
          </div>
          <a href="#" class="notification-action">View</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Notifications',
  data() {
    return {
      notifications: [
        { id: 1, message: 'You have a new message from Alice.', timestamp: '2 hours ago' },
        { id: 2, message: 'Your password will expire in 3 days.', timestamp: '1 day ago' },
        // ...更多通知
      ]
    };
  },
};
</script>

<style scoped>
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

.notification-page {
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.notification-title {
  font-size: 24px;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.notification-card {
  background: #f9f9f9;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.notification-card:hover {
  box-shadow: 0 2px 5px rgba(0,0,0,0.12);
}

.notification-description {
  font-size: 16px;
  color: #333;
}

.notification-timestamp {
  font-size: 12px;
  color: #999;
}

.notification-action {
  background: #4CAF50;
  color: white;
  padding: 10px 15px;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.3s ease-in-out;
}

.notification-action:hover {
  background: #45a049;
}
.notification-content {
  /* 添加 flex 布局以处理内容和按钮之间的距离 */
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* 确保内容占据大部分空间 */
  margin-right: 20px; /* 在内容和按钮之间增加右边距 */
}

.notification-action {
  background: #4CAF50;
  color: white;
  padding: 10px 15px;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.3s ease-in-out;
  white-space: nowrap; /* 防止按钮文本折行 */
  margin-left: 20px; /* 在按钮和内容之间增加左边距 */
}
</style>
