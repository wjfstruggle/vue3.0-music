import Vue from 'vue'
import Router from 'vue-router'
import Recommend from './views/Recommend.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'recommend',
      component: Recommend
    },
    {
      path: '/TopList',
      name: 'toplist',
      component: () => import('./views/TopList.vue')
    },
    {
      path: '/Search',
      name: 'search',
      component: () => import('./views/Search.vue')
    }
  ]
})
