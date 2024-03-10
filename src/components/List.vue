<template>
    <div class="user-list">
      <h3>matched list</h3>
      <ul>
        <li v-for="user in users" :key="user.id" class="user-item">
          <div class="user-avatar">{{ user.initials }}</div>
          <div class="user-name">{{ user.name }}</div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserList',
    data() {
      return {
        // 添加一些虚拟用户作为示例
        users: [
          { id: 1, name: 'Alice', initials: 'A' },
          { id: 2, name: 'Bob', initials: 'B' },
          { id: 3, name: 'Charlie', initials: 'C' }
        ]
      }
    }
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
  