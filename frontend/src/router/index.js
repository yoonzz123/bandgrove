import { createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/home2',
    name: 'Home2',
    component: () => import('@/views/Home2.vue') 
  },
  {
    path: '/loginPage',
    name: 'LoginPage',
    component: () => import('@/views/LoginPage.vue')
  },
  {
    path: '/myPage',
    name: 'MyPage',
    component: () => import('@/views/MyPage.vue')
  },
  {
    path: '/settingPage',
    name: 'SettingPage',
    component: () => import('@/views/SettingPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
      // always scroll to top
      return { top: 0 }
  },
})

router.beforeEach((to, from, next) => {
  // console.log("router beforeEach start ...")
  next()
})

router.afterEach((to, from) => {
  // console.log("router afterEach start ...")
})

export default router