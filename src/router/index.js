import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/login',
      //component: r => require.ensure([], r(require('@/page/home.vue')))
    },
    {
      path: '/login',
      name: 'login',
      component: r => require.ensure([], r(require('@/page/login.vue')))
    },
    {
      path: '/inspection',
      name: 'inspection',
      component: r => require.ensure([], r(require('@/page/inspection.vue')))
    },
    {
      path: '/performance',
      name: 'performance',
      component: r => require.ensure([], r(require('@/page/performance.vue')))
    },
    {
      path: '/performance/parse',
      name: 'parse',
      component: r => require.ensure([], r(require('@/page/parse.vue')))
    },
    {
      path: '/config/targets',
      name: 'configTargets',
      component: r => require.ensure([], r(require('@/page/config/targets.vue')))
    },
    {
      path: '/config/items',
      name: 'configItems',
      component: r => require.ensure([], r(require('@/page/config/items.vue')))
    }
  ]
})

