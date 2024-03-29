import { createRouter, createWebHistory } from 'vue-router'
//@ts-ignorets
import DetailView from '../views/DetailView.vue'
//@ts-ignorets
import AboutView from '../views/AproposView.vue'
//@ts-ignorets
import AproposView from '../views/About.vue'
//@ts-ignorets
import loadingView from '@/views/LoadingView.vue'
//@ts-ignorets
import loaderView from '@/views/pageLoaderView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/apropos',
      name: 'About',
      component: AproposView
    },
    {
      path: '/details/:id',
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
      //@ts-ignorets
      component: () => import('../views/SearchView.vue')
    },
    {
      path: '/loading',
      name: 'loading',
      component: loadingView
    },
    {
      path: '/loader',
      name: 'loaderpage',
      component: loaderView
    }
  ]
})

export default router
