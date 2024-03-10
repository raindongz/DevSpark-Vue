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
      users: [], // 用户列表数据
      messages: [] // 消息列表数据
    };
  },
  methods: {
    handleSendMessage(newMessage) {
      // 这里处理用户通过ChatInput组件发送的消息
      // 比如更新messages数组，并发送到后端或WebSocket服务
      const message = {
        id: Date.now(), // 或者其他生成唯一ID的方法
        author: 'oceancloudy', // 应替换为实际的用户名
        content: newMessage,
        isMine: true // 假设所有发送的消息都是当前用户的
      };
      this.messages.push(message);
    }
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
