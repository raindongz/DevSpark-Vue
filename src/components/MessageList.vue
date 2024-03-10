<template>
    <div class="message-list">
      <ul>
        <li v-for="message in messages" :key="message.id" :class="{'my-message': message.isMine}">
          <span class="message-author">{{ message.author }}:</span>
          <span class="message-content">{{ message.content }}</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MessageList',
    props: {
      messages: {
        type: Array,
        default: () => []
      }
    },
    updated() {
      // 当消息更新时滚动到底部
      this.$nextTick(() => {
        const container = this.$el;
        container.scrollTop = container.scrollHeight;
      });
    }
  }
  </script>
  
  <style scoped>
  .message-list {
    padding: 0.5em;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    max-height: 400px; /* 限制最大高度并允许滚动 */
    overflow-y: auto;
  }
  
  .message-list ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .message-list li {
    margin-bottom: 0.5em;
    padding: 0.5em;
    background-color: #e7e7e7;
    border-radius: 10px;
    word-wrap: break-word;
  }
  
  .message-list .my-message {
    background-color: #d1e7dd;
    align-self: flex-end;
  }
  
  .message-author {
    font-weight: bold;
    margin-right: 0.5em;
  }
  
  .message-content {
    display: inline-block;
    padding: 0.2em 0.4em;
  }
  .message-list {
  /* ...其他样式... */
  min-height: 50vh;
   } /* 或者您希望的任何合适的最小高度 */
  </style>
  