<template>
    <div class="match-container">
      <h1>You are matched!</h1>
      <div class="button-container">
        <router-link to="/" class="chat-button">Start Chat Now</router-link>
        <router-link to="/userlist" class="chat-button">Start Chat Later</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Match',
    methods: {
      startChatNow() {
        // 实现开始聊天的逻辑，可能是路由到一个聊天界面
        this.$router.push('/chat-now');
      },
      startChatLater() {
        // 实现稍后聊天的逻辑，可能是设置一个提醒或者返回主页
        this.$router.push('/home');
      }
    },
  };
  </script>
  
  <style scoped>
  .match-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  h1 {
    margin-bottom: 20px;
  }
  
  .button-container {
    display: flex;
    flex-direction: column;
  }
  
  .chat-button {
    padding: 10px 20px;
    margin-bottom: 10px;
    text-align: center;
    text-decoration: none;
    background-color: #4caf50;
    color: white;
    border-radius: 5px;
    transition: background-color 0.2s;
  }
  
  .chat-button:hover {
    background-color: #43a047;
  }
  </style>
  