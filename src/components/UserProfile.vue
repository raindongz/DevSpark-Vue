<template>
    <div class="user-profile">
      <img :src="user.avatar" alt="User avatar" class="user-avatar">
      <h1>{{ user.name }}</h1>
      <p>{{ user.bio }}</p>
      <p><strong>Phone:</strong> {{ user.phone }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p>{{ user.additionalInfo }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserProfile',
    props: {
      user: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .user-profile {
    text-align: center;
    /* Add additional styling as necessary */
  }
  
  .user-avatar {
    width: 100px; /* Set the avatar size */
    height: 100px; /* Set the avatar size */
    border-radius: 50%; /* Make the avatar circular */
    margin-bottom: 1rem; /* Add some space below the avatar */
  }
  
  /* You may add additional styles below for other elements if necessary */
  </style>
  