import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GamingRegisterView from '../views/GamingRegisterView.vue'
import QuizRegisterView from '../views/QuizRegisterView.vue'
import CodingRegisterView from '@/views/CodingRegisterView.vue'
import DebuggingRegisterView from '@/views/DebuggingRegisterView.vue'
import WebDesigningRegisterView from '@/views/WebDesigningRegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/gaming-register',
      name: 'Gaming-Register',
      component: GamingRegisterView,
    },
    {
      path: '/quiz-register',
      name: 'Quiz-Register',
      component: QuizRegisterView,
    },
    {
      path: '/coding-register',
      name: 'Coding-Register',
      component: CodingRegisterView,
    },
    {
      path: '/debugging-register',
      name: 'Debugging-Register',
      component: DebuggingRegisterView,
    },
    {
      path: '/web-designing-register',
      name: 'Web-Designing-Register',
      component: WebDesigningRegisterView,
    },
  ],
})

export default router
