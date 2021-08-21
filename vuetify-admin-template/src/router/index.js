import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/views/Dashboard'
import GridSystem from '@/views/GridSystem'
import GirdListPage from '@/views/GridListPage'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/grid-system',
        name: 'GridSystem',
        component: GridSystem
    },
    {
      path: '/grid-list-page',
      name: 'GirdListPage',
      component: GirdListPage
  },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;
