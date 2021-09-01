import Vue from 'vue'
import VueRouter from 'vue-router'

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
        path: '/tables/basic-table',
        name: 'BasicTables',
        component: () => import(/* webpackChunkName: "basic-table" */'@/views/table/BasicTables')
      },
      {
        path: '/tables/app-table',
        name: 'AppTables',
        component: () => import(/* webpackChunkName: "app-table" */'@/views/table/AppTables')
      },
      {
        path: '/forms/validation-form',
        name: 'ValidationForms',
        component: () => import(/* webpackChunkName: "validation-forms" */'@/views/form/ValidationForms')
      },
      {
        path: '/forms/app-form',
        name: 'AppForms',
        component: () => import(/* webpackChunkName: "app-forms" */'@/views/form/AppForms')
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
