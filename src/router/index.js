import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ChatEmpty from '@/components/ChatEmpty.vue'
import ChatUser from '@/components/ChatUser.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      children: [
        {
          path: '',
          name: 'chat-empty',
          component: ChatEmpty,
        },
        {
          path: 'chat',
          name: 'chat-user',
          component: ChatUser,
        }
      ],
    },
  ]
})

export default router
