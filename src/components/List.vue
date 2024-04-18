<template>
  <div class="user-list">
    <h3>matched list</h3>
    <ul>
      <li v-for="user in userlist.matchedUserInfoList" :key="user.userId" class="user-item">
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
    }
  },
 
  methods: {
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
</style>