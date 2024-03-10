// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import ChatRoom from '@/views/ChatRoom.vue';
import Profile from '@/views/Profile.vue';
import Settings from '@/views/Settings.vue'
import Notifications from '@/views/Notifications.vue'
import UserList from '@/views/UserList.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import EngineerPhoto from '@/views/EngineerPhoto.vue'
import Match from '@/views/Match.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'ChatRoom',
      component: ChatRoom
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/notifications',
      name: 'Notifications',
      component: Notifications
    },
    {
      path: '/userlist',
      name: 'Userlist',
      component: UserList
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/engineer-photo',
      name: 'EngineerPhoto',
      component: EngineerPhoto
    },
    {
      path: '/match',
      name: 'Match',
      component: Match
    }
    
  ],
});

export default router;
