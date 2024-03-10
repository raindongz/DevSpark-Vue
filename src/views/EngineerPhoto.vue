<!-- eslint-disable vue/no-parsing-error -->
<template>
    <div class="engineer-photo-container">
      <!-- Engineer's photo frame -->
      <div class="photo-frame">
        <img :src="currentPhoto" alt="Engineer's Photo" @click="goToProfile" />
      </div>
  
      <!-- Navigation arrows -->
      <button class="arrow left-arrow" @click="previousPhoto"><</button>
      <button class="arrow right-arrow" @click="nextPhoto">></button>
  
      <!-- Like button -->
      <button class="like-button" @click="goToChat">like</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EngineerPhoto',
  
    data() {
      return {
        currentPhotoIndex: 0,
        photos: [
          'images/User.png', // This is the path to your image based on your project structure
          // Add paths to other images as needed
        ],
      };
    },
  
    computed: {
      currentPhoto() {
        return this.photos[this.currentPhotoIndex];
      },
    },
  
    methods: {
      goToProfile() {
        this.$router.push('/profile'); 
      },
      goToChat() {
        this.$router.push('/match'); 
      },
      nextPhoto() {
        if (this.currentPhotoIndex < this.photos.length - 1) {
          this.currentPhotoIndex++;
        }
      },
      previousPhoto() {
        if (this.currentPhotoIndex > 0) {
          this.currentPhotoIndex--;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .engineer-photo-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Use the full height of the viewport */
    flex-direction: column; /* Stack children vertically */
  }
  
  .photo-frame {
    margin: 0;
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 15px;
  }
  
  .photo-frame img {
    width: 300px; /* Larger photo */
    height: 300px; /* Larger photo */
    object-fit: cover;
    cursor: pointer;
  }
  
  .arrow {
    background-color: #ffffff;
    border: 2px solid #ddd;
    border-radius: 50%;
    cursor: pointer;
    font-size: 24px; /* Adjust font size for new arrows */
    width: 50px; /* Slightly larger arrows */
    height: 50px; /* Slightly larger arrows */
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: background-color 0.3s, transform 0.3s;
  }
  
  .left-arrow {
    left: calc(10% - 20px); /* Closer to the photo */
  }
  
  .right-arrow {
    right: calc(10% - 20px); /* Closer to the photo */
  }
  
  .arrow:hover {
    background-color: #eee;
    transform: translateY(-50%) scale(1.1);
  }
  
  .like-button {
    padding: 10px 20px;
    margin-top: 20px;
    border-radius: 5px;
    background-color: #4caf50;
    color: white;
    cursor: pointer;
    border: none;
    font-size: 1rem;
  }
  
  .like-button:hover {
    background-color: #43a047;
  }
  </style>
  