import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Zz from '@/views/zz.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/zz',
    component: Zz,
  },
  {
    path: '/parents',
    component: () => import('@/views/parents.vue'),
  },
  {
    path: '/child',
    component: () => import('@/views/child.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router;
