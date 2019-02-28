import Vue from 'vue'
import Router from 'vue-router'
import demo1 from './views/demo1.vue'
import demo2 from './views/demo2.vue'
import demo3 from './views/demo3.vue'
import demo4 from './views/demo4.vue'
import demo5 from './views/demo5.vue'
import demo6 from './views/demo6.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/demo1',
      name: 'demo1',
      component: demo1
    },
    {
      path: '/demo2',
      name: 'demo2',
      component: demo2
    },
    {
      path: '/demo3',
      name: 'demo3',
      component: demo3
    },
    {
      path: '/demo4',
      name: 'demo4',
      component: demo4
    },
    {
      path: '/demo5',
      name: 'demo5',
      component: demo5
    },
    {
      path: '/demo6',
      name: 'demo6',
      component: demo6
    },
    {
      path: '/demo8',
      name: 'demo8',
      component: () => import('../src/views/demo8.vue')
    }
  ]
})
