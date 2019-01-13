import Vue from 'vue'
import Router from 'vue-router'
import PageThreadShow from '@/pages/PageThreadShow'
import Forum from '@/pages/PageForum'
import PageHome from '@/pages/PageHome'
import PageNotFound from '@/pages/PageNotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PageHome',
      component: PageHome
    },
    {
      path: '/forum/:id',
      name: 'Forum',
      component: Forum,
      props: true
    },
    {
      path: '/thread/:id',
      name: 'ThreadShow',
      component: PageThreadShow,
      props: true
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ]
})
