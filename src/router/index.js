import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/page/home/Home'
import Refer from '@/page/refer/Refer'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/refer',
      name: 'refer',
      component: Refer
    }
  ]
})
