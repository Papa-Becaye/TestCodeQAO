import { createRouter, createWebHistory } from 'vue-router'
import DetailView from '../views/DetailView.vue'
import AboutView from '../views/AproposView.vue'
import AproposView from '../views/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/apropos',
      name: 'About',
      component: AproposView
    },
    {
      path: '/details',
      name: 'detail',
      component: DetailView
    },
    {
      path: '/about',
      name: 'a-propos',
      component: AboutView
    },
    {
      path: '/search',
      name: 'search',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SearchView.vue')
    }
  ]
})

export default router
