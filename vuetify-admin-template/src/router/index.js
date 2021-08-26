import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/views/Dashboard'
import GridSystem from '@/views/GridSystem'
import GirdListPage from '@/views/GridListPage'
import Breakpoints from '@/views/Breakpoints'
import Typography from '@/views/Typography'
import Tables from '@/views/Tables'
import Forms from '@/views/Forms'
import Buttons from '@/views/Buttons'
import Icons from '@/views/Icons'
// import Test from '@/views/Test'
// import SignIn from '@/views/authentication/SignIn'
// import SignUp from '@/views/authentication/SignUp'
import ProductList from '@/views/page/ProductList'
import DefaultLayout from '@/layouts/default/Index'
import PageLayout from '@/layouts/page/Index'
import AuthenticationLayout from '@/layouts/authentication/Index'

const Test = function (resolve, reject) {
  return import('@/views/Test')
  // resolve({
  //   'template': '<div>Hello Test!!!@@@</div>'
  // })
}

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "views-default" */'@/layouts/default/Index'),
    children: [
      {
        path: '/test',
        name: 'Test',
        component: Test
      },
      {
        path: '/',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "Dashboard" */'@/views/Dashboard')
      },
      {
        path: '/grid-system',
        name: 'GridSystem',
        component: () => import(/* webpackChunkName: "GridSystem" */'@/views/GridSystem')
      },
      {
        path: '/grid-list-page',
        name: 'GirdListPage',
        component: () => import(/* webpackChunkName: "GridListPage" */'@/views/GridListPage')
      },
      {
        path: '/breakpoints',
        name: 'Breakpoints',
        component: () => import(/* webpackChunkName: "Breakpoints" */'@/views/Breakpoints')
      },
      {
        path: '/typography',
        name: 'Typography',
        component: () => import(/* webpackChunkName: "Typography" */'@/views/Typography')
      },
      {
        path: '/tables',
        name: 'Tables',
        component: () => import(/* webpackChunkName: "Tables" */'@/views/Tables')
      },
      {
        path: '/forms',
        name: 'Forms',
        component: () => import(/* webpackChunkName: "Forms" */'@/views/Forms')
      },
      {
        path: '/buttons',
        name: 'Buttons',
        component: () => import(/* webpackChunkName: "Buttons" */'@/views/Buttons')
      },
      {
        path: '/icons',
        name: 'Icons',
        component: () => import(/* webpackChunkName: "Icons" */'@/views/Icons')
      },
    ]
  },
  {
    path: '/authentication',
    component: () => import(/* webpackChunkName: "views-authentication" */ '@/layouts/authentication/Index'),
    children: [
      {
        path: 'sign-in',
        name: 'SignIn',
        component: () => import(/* webpackChunkName: "views-authentication" */ '@/views/authentication/SignIn')
      },
      {
        path: 'sign-up',
        name: 'SignUp',
        component: () => import(/* webpackChunkName: "views-authentication" */ '@/views/authentication/SignUp')
      },
    ]
  },
  {
    path: '/page',
    component: () => import(/* webpackChunkName: "views-page" */'@/layouts/page/Index'),
    children: [
      {
        path: 'product-list',
        name: 'ProductList',
        component: () => import(/* webpackChunkName: "views-page" */ '@/views/page/ProductList'),
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router;
