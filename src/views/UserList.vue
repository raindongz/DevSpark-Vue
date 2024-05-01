<template>
  <div class="container">
    <div class="sidebar">
      <ul class="nav">
        <li><router-link to="/profile" class="nav-item">Profile</router-link></li>
        <li><router-link to="/settings" class="nav-item">Settings</router-link></li>
        <li><router-link to="/notifications" class="nav-item">Notifications</router-link></li>
        <li><router-link to="/userlist" class="nav-item">UserList</router-link></li>
      </ul>
    </div>
   
    <div class="user-list">
      <h3>matched list</h3>
      <ul>
        <li v-for="user in users" :key="user.id" class="user-item">
          <div class="user-avatar">{{ user.initials }}</div>
          <div class="user-name">{{ user.name }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'UserListWithSidebar',
  data() {
    return {
      // 添加一些虚拟用户作为示例

      users: [
        { id: 1, name: 'Alice', initials: 'A' },
        { id: 2, name: 'Bob', initials: 'B' },
        { id: 3, name: 'Charlie', initials: 'C' }
      ]
    }
  },
  
}
</script>


<style scoped>
body,
html {
  height: 100%;
  /* 确保父元素是全高度 */
  margin: 0;
  /* 移除默认边距 */
  display: flex;
  justify-content: center;
  /* 水平居中 */
  align-items: center;
  /* 垂直居中 */
  background-color: #f3f3f3;
  /* 可选：设置整个页面的背景颜色 */
}

.user-list {
  width: 60%;
  /* 根据您的偏好进行调整 */
  max-width: 600px;
  /* 最大宽度确保在较大屏幕上不会太宽 */
  margin: auto;
  /* 如果flexbox方法不适用，此设置有助于居中，例如，如果作用域样式不影响body */
  padding: 0.5em;
  background-color: #fff;
  /* 调整为白色以获得对比 */
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  margin-top: 40px;
  /* 根据需要调整这个值以向上移动 */
  /* 可能需要增加底部边距来保持视觉上的平衡 */
}

.user-list h3 {
  margin-top: 0;
  color: #333;
}

.user-list ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.user-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 0.5em;
  background-color: #fff;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.user-item:hover {
  background-color: #e6e6e6;
}

.user-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #5cb85c;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  font-weight: bold;
  font-size: 1.2em;
}

.user-name {
  font-size: 1em;
  color: #333;
}

.container {
  display: flex;
  height: 100vh;
  width: 100%;
  margin: 0;
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
</style>
