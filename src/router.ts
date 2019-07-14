import Vue from 'vue'
import Router from 'vue-router'
import Pomodoro from './views/Pomodoro.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'pomodoro',
      component: Pomodoro
    }
  ]
})
