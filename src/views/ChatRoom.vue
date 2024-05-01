<template>
  <div class="chat-room">
    <div class="chat-sidebar">
      <user-list :users="users" />
    </div>
    <div class="chat-main">
      <message-list :messages="messages" />
      <chat-input @sendMessage="handleSendMessage" />
    </div>
  </div>
</template>

<script>

import UserList from '@/components/List.vue';
import MessageList from '@/components/MessageList.vue';
import ChatInput from '@/components/ChatInput.vue';
import axios from 'axios';


export default {
  name: 'ChatRoom',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    UserList,
    MessageList,
    ChatInput,
  },
  data() {
    return {
      currUser: JSON.parse(localStorage.getItem("user")),
      users: [], // 用户列表数据
      messages: [] // 消息列表数据
    };
  },
  mounted() {
    // 组件挂载后立即调用一次，确保组件加载时有数据显示
    if (localStorage.getItem("selectedUser") != null){
      this.getChatHistory();
    }
    // 设置定时器，每10秒调用getChatHistory方法
    this.interval = setInterval(this.getChatHistory, 3000);
  },
  beforeUnmount() {
    // 组件销毁前清除定时器，防止内存泄漏
    clearInterval(this.interval);
  },
  methods: {
    handleSendMessage(newMessage) {
      // 这里处理用户通过ChatInput组件发送的消息
      // 比如更新messages数组，并发送到后端或WebSocket服务
      const message = {
        id: Date.now(), // 或者其他生成唯一ID的方法
        author: this.currUser.username, // 前端展示的名字
        senderId: this.currUser.userId, //
        content: newMessage,
        isMine: true, // 假设所有发送的消息都是当前用户的
        receiverId: localStorage.getItem("selectedUser"),
        message: newMessage
      };
      this.messages.push(message);
      axios.post('api/chat/send-message', message)
        .catch(error => {
          // 处理发送失败的逻辑
          console.error('Error:', error)
        });
    },
    // 获取聊天记录
    getChatHistory() {
      axios.post('api/chat/get-chat-history',{matchedUserId: localStorage.getItem("selectedUser")})
          .then(response => {
            this.messages = response.data.chatRecordList
            for (let i = 0; i < this.messages.length; i++) {
              if (this.messages[i].senderId === this.currUser.userId) {
                this.messages[i].isMine = true;
                this.messages[i].author = this.currUser.username;
              } else {
                this.messages[i].author = "Receiver"
              }
            }
          })
          .catch(error => console.error('Error:', error))
    },
    // 从List.vue调用getChatHistory，方法有点冗余，不想改了
    selectUserTrigger(user) {
      localStorage.setItem("selectedUser", user.userId);
      this.getChatHistory();
    },
  }
}
</script>

<style scoped>
.chat-room {
  display: flex;
  height: 100vh; /* 假设聊天室应该填满整个视口高度 */
}

.chat-sidebar {
  width: 25%;
  background-color: #f3f3f3;
}

.chat-main {
  width: 75%;
  display: flex;
  flex-direction: column;
}

/* 其他样式根据需要添加 */
</style>
