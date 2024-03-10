<template>
    <nav class="navbar">
      <div class="nav-brand">Vue Chatroom</div>
      <ul class="nav-links">
        <li class="nav-item"><router-link to="/" exact class="nav-link">Home</router-link></li>
        <li class="nav-item"><router-link to="/profile" class="nav-link">Profile</router-link></li>
        <li class="nav-item"><router-link to="/login" class="nav-link">Login / Register</router-link></li>
        <li class="nav-item"><router-link to="/engineer-photo" class="nav-link">engineer-photo</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Navbar'
  }
  </script>
  
  <style scoped>
  .navbar {
    background-color: #34495e;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em 1em;
    font-family: 'Segoe UI', sans-serif;
  }
  
  .nav-brand {
    color: #ecf0f1;
    font-size: 1.5em;
    font-weight: 600;
  }
  
  .nav-links {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }
  
  .nav-item {
    margin-left: 20px;
  }
  
  .nav-link {
    color: #ecf0f1;
    text-decoration: none;
    padding: 0.5em 0.75em;
    border-radius: 4px;
    transition: color 0.3s, background-color 0.3s, transform 0.3s;
  }
  
  .nav-link:hover,
  .nav-link.router-link-exact-active {
    color: #fff;
    background-color: #2980b9;
    transform: scale(1.05);
  }
  
  .nav-link:active {
    background-color: #1c6ea4;
    transform: scale(0.95);
    
  }
  .nav-link {
  color: #ecf0f1;
  text-decoration: none;
  padding: 0.5em 0.75em;
  border-radius: 4px;
  transition: color 0.3s, background-color 0.3s, transform 0.3s;
  cursor: pointer; /* 添加这一行 */
}
  </style>
  