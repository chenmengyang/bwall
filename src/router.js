import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dgy',
      name: 'dgy',
      component: () => import(/* webpackChunkName: "home" */ './views/Dagaiyu.vue')
    },
    {
      path: '/xsd',
      name: 'xsd',
      component: () => import(/* webpackChunkName: "about" */ './views/Xinshidai.vue')
    }
  ]
})