<!-- eslint-disable vue/no-parsing-error -->
<template>
    <div class="engineer-photo-container">
      <!-- Engineer's photo frame -->
      <div class="photo-frame">
        <img :src="currentPhoto" alt="Engineer's Photo" @click="goToProfile" />
      </div>
      
      <!-- Engineer's username -->
      <div class="username-display">{{ currentUser.username }}</div>
  
      <!-- Navigation arrows -->
      <button class="arrow left-arrow" @click="previousPhoto"><</button>
      <button class="arrow right-arrow" @click="nextPhoto">></button>
  
      <!-- Like button -->
      <button class="like-button" @click="likeOrDislike">likeOrDislike</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';

  export default {
    name: 'EngineerPhoto',
  
    data() {
      return {
        currentPhotoIndex: 0,
        currentUserIndex: 0,
        photos: [
          'images/User.png', // This is the path to your image based on your project structure
          // Add paths to other images as needed
        ],
        users: [],
      };
    },

    mounted() {
      this.fetchUserData();
    },
  
    computed: {
      currentPhoto() {
        return this.users.length > 0 ? this.users[this.currentPhotoIndex].avatars : '';
      },
      currentUser() {
        return this.users.length > 0 ? this.users[this.currentUserIndex] : {};
      }
    },
  
    methods: {
      fetchUserData() {
        axios.post('https://devspark.click/match/get-my-recommend-list', null, {
          headers: { 'Authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL2RldnNwYXJrLmNsaWNrIiwiZXhwIjoxNzEzMDg5MDIwLCJzdWIiOiI4In0.U3bditHIOloR8f098srrD9qHi4l9sDcbnRSfws3bEI7rJVEb2Nc45_nmSCP0oDBpCq4LHs9IoVTHU0wzCwcxlIzM33zNyXqbbq_0p4tHZT69hs5500RU6uvUJU3hPy63Ai8QBN-nqMUaJarLykqnim_3IS969Fa7DhJpaj_W2MK6FhZa7SupGt7Sp_XGlliqV3RX7fUA8hmdSF8W0WMMH4Q6RWz0fID3nzI267PyNZOtpi6xkfRk2VU9AtMMDGV5g-Kjn6BP2YYPjqcfi4ULqQwAmUnN68ElpcBFfNY3uEJr1VyRdEAliMDs6qA0EXnvHjA4OZJd6CbtRVh1qqtMpQ' }
        })
        .then(response => {
          this.users = response.data.recommendedUserList;
        })
        .catch(error => console.error('Error:', error));
      },
      likeOrDislike() {
        axios.post('https://devspark.click/match/like-or-unlike', {
          personILiked: this.currentUser.userId
        }, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL2RldnNwYXJrLmNsaWNrIiwiZXhwIjoxNzEzMDg5MDIwLCJzdWIiOiI4In0.U3bditHIOloR8f098srrD9qHi4l9sDcbnRSfws3bEI7rJVEb2Nc45_nmSCP0oDBpCq4LHs9IoVTHU0wzCwcxlIzM33zNyXqbbq_0p4tHZT69hs5500RU6uvUJU3hPy63Ai8QBN-nqMUaJarLykqnim_3IS969Fa7DhJpaj_W2MK6FhZa7SupGt7Sp_XGlliqV3RX7fUA8hmdSF8W0WMMH4Q6RWz0fID3nzI267PyNZOtpi6xkfRk2VU9AtMMDGV5g-Kjn6BP2YYPjqcfi4ULqQwAmUnN68ElpcBFfNY3uEJr1VyRdEAliMDs6qA0EXnvHjA4OZJd6CbtRVh1qqtMpQ'
          }
        })
        .then(() => {
          alert('Successful!');
        })
        .catch(error => {
          alert('Error liking the user: ' + error.response.data);
        });
      },
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
        if (this.currentUserIndex < this.users.length - 1) {
          this.currentUserIndex++;
        }
      },
      previousPhoto() {
        if (this.currentPhotoIndex > 0) {
          this.currentPhotoIndex--;
        }
        if (this.currentUserIndex > 0) {
          this.currentUserIndex--;
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

  .username-display {
    margin-top: 10px;
    font-size: 18px;
    color: #333;
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
  