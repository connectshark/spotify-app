const { createWebHistory, createRouter } = require('vue-router')

const history = createWebHistory()

const router = createRouter({
  history,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue')
    },
    {
      path: '/authorize',
      name: 'authorize',
      component: () => import('../views/authorize.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: {
        path: '/home'
      }
    }
  ]
})

router.beforeEach(() => {
  return true
})

export default router