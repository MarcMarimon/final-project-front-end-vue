import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

import { useUserStore } from '@/stores/userStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signin',
      name: 'signIn',
      component: () => import('@/views/SignFormView.vue')
    },
    {
      path: '/signup',
      name: 'signUp',
      component: () => import('@/views/SignFormView.vue')
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: () => import('@/views/WelcomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/DashboardView.vue')
    },
    {
      path: '/edit/:taskId',
      name: 'editTask',
      component: () => import('@/views/EditTaskView.vue')
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()

  if (userStore.user === undefined) {
    await userStore.fetchUser()
  }

  if (to.name === 'home' || to.name === 'signUp') {
    next()
    return
  }

  if (userStore.user === null && to.name !== 'signIn') {
    next({ name: 'signIn' })
  } else {
    next()
  }
})
export default router
