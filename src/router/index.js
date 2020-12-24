const { createWebHistory, createRouter } = require('vue-router')

const history = createWebHistory()

const router = createRouter({
  history,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/home.vue'),
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
      path: '/category/:category',
      name: 'category',
      component: () => import('../views/category.vue'),
      props: true
    },
    {
      path: '/playlists/:listId',
      name: 'playlists',
      component: () => import('../views/playlists.vue'),
      props: true
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