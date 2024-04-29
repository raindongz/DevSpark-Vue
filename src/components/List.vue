<template>
  <div class="user-list">
    <h3>matched list</h3>
    <ul>
      <li v-for="user in userlist.matchedUserInfoList"
          :key="user.userId"
          class="user-item"
          :class="{ 'selected': selectedUser && user.userId === selectedUser.userId }"
          @click="handleSelectUser(user)">
        <div class="user-avatar">{{ capitalUpper(user.username) }}</div>
        <div class="user-name">{{ user.username }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'UserList',
  data() {
    return {
      userlist: {},
      savedFields: {},
      selectedUser: {},
    }
  },

  methods: {
    // 处理选中后立刻获取聊天记录
    handleSelectUser(user) {
      // 在本类中用于标识和组件变色
      this.selectedUser = user;
      // 触发调用聊天记录刷新数据
      this.$parent.selectUserTrigger(user);
    },
    saveFields() {
    this.savedFields.userlist = this.userlist;
  },
    fetchMyProfile() {


      const url = 'api/match/get-my-matched-list';
      const instance = axios.create();

      instance
        .post(url)
        .then(response => {
          this.userlist = response.data;
          // 获取聊天列表后，将第一个用户id存入localStorage，用于立刻获取聊天记录
          if (response && response.data && response.data.matchedUserInfoList && response.data.matchedUserInfoList.length > 0) {
            const userId = response.data.matchedUserInfoList[0].userId;
            localStorage.setItem("selectedUser", parseInt(userId));
          }
          console.log('用户信息:', this.userInfo);
        })
        .catch(error => {
          console.error('请求错误:', error);
        });
    },
    capitalUpper(string) {
      if (!string) return '';
      return string.charAt(0).toUpperCase();
    }
  },
  created() {
    this.fetchMyProfile();
    this.saveFields();
  },
}
</script>

<style scoped>
.user-list {
  padding: 0.5em;
  background-color: #f3f3f3;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
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
.selected {
  background-color: #a2a2d0; /* 鼠标点击选择后变色 */
}
</style>
