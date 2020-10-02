import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TicTacToe',
    component: () => import(/* webpackChunkName: "prepare" */ '@/views/Home.vue')
  },
  {
    path: '/c',
    name: 'Prepare',
    component: () => import(/* webpackChunkName: "prepare" */ '@/views/Prepare.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
