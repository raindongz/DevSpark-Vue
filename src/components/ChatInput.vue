<template>
  <div class="chat-container">
    <!-- 聊天输入区域 -->
    <div class="chat-input">
      <form @submit.prevent="onSubmit" class="input-form">
        <textarea
          v-model="newMessage"
          placeholder="输入消息..."
          class="message-input"
          @input="autoResize"
          @keydown.enter="onEnterPress"
          @keydown="resetEmojiFlag"
        ></textarea>
        <div class="buttons">
          <button type="submit" class="send-button">发送</button>
          <button type="button" class="emoji-button" @click="toggleEmojiPicker">+</button>
        </div>
      </form>
      <div id="emoji-picker"></div>
    </div>
    <!-- 功能按钮区域 -->
    <div class="action-buttons">
      <input type="file" id="image-input" ref="imageInput" accept="image/*" hidden @change="handleImageUpload">
      <div class="action-button" @click="triggerImageUpload">
        <i class="icon icon-image">📷</i>
        <span>图片</span>
      </div>
      <input type="file" id="file-input" ref="fileInput" hidden @change="handleFileUpload">
      <div class="action-button" @click="triggerFileUpload">
        <i class="icon icon-file">📁</i>
        <span>文件</span>
      </div>
      <div class="action-button" @click="handleAudioInput">
        <i class="icon icon-audio">🎤</i>
        <span>语音</span>
      </div>
    </div>
  </div>
</template>

<script>
import { EmojiButton } from '@joeattardi/emoji-button';

export default {
  name: 'ChatInput',
  data() {
    return {
      newMessage: '',
      emojiPicker: null,
    };
  },
  mounted() {
    this.emojiPicker = new EmojiButton({
      // 在这里添加EmojiButton的配置选项，如果有的话
    });

    // 注册选择表情后的回调
    this.emojiPicker.on('emoji', selection => {
      this.newMessage += selection.emoji;
    });
  },
  methods: {
    onSubmit() {
      if (this.newMessage.trim()) {
        this.$emit('send-message', this.newMessage.trim());
        this.newMessage = '';
      }
    },
    onEnterPress(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        this.onSubmit();
      }
    },
    autoResize(event) {
      event.target.style.height = 'auto';
      event.target.style.height = event.target.scrollHeight + 'px';
    },
    toggleEmojiPicker(event) {
      this.emojiPicker.togglePicker(event.currentTarget);
    },
    triggerImageUpload() {
      this.$refs.imageInput.click();
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        // 在这里处理图片文件
        console.log('上传的图片', file);
      }
    },
    triggerFileUpload() {
      this.$refs.fileInput.click();
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        // 在这里处理文件上传
        console.log('上传的文件', file);
      }
    },
    handleAudioInput() {
      // 在这里处理语音输入
      console.log('处理语音输入');
    }
  }
}
</script>


<style scoped>
.chat-input {
  display: flex;
  flex-direction: column;
  padding: 0.5em;
  background-color: #f4f4f4;
  border-top: 1px solid #ccc;
}

.input-form {
  display: flex;
  align-items: flex-start;
  width: 100%;
  position: relative;
}

.message-input {
  flex: 1;
  padding: 0.5em;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
  overflow: hidden;
  min-height: 38px;
}

.buttons {
  display: flex;
  align-items: center;
}

.send-button, .emoji-button {
  padding: 0.5em 1em;
  margin: 2px 0;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
}

.send-button {
  background-color: #5cb85c;
  color: white;
  border: none;
}

.send-button:hover {
  background-color: #4cae4c;
}

.emoji-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: none;
  background-color: #ddd;
  color: black;
  border-radius: 50%;
  position: relative;
}

.emoji-button:hover {
  background-color: #ccc;
}

.emoji-picker-container {
  position: absolute;
  bottom: 50px;
  right: 0;
  z-index: 1000;
}

/* 更新后的功能按钮样式 */
.action-buttons {
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
}

.action-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 4px;
  width: 100px; /* 将按钮的宽度和高度增大到120px */
  height: 100px; /* 使按钮成为正方形，并且比之前大一倍 */
  margin: 0 4px;
  cursor: pointer;
  font-size: 24px; /* 图标大小增大 */
  transition: background-color 0.2s ease-in-out;
}

.action-button:hover {
  background-color: #f8f8f8;
}

.action-button i,
.action-button span {
  display: block;
}

.action-button span {
  margin-top: 8px; /* 调整文字与图标的间距 */
  font-size: 16px; /* 增大文字大小 */
}
</style>

