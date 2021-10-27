import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/menu01/exam01view",
    name: "menu01_exam01view",
    component: () => import(/* webpackChunkName: "menu01" */ '../views/menu01/Exam01View.vue')
  },
  {
    path: "/menu01/exam02view",
    name: "menu01_exam02view",
    component: () => import(/* webpackChunkName: "menu01" */ '../views/menu01/Exam02View/index.vue')
  },
  {
    path: "/menu01/exam03view",
    component: () => import(/* webpackChunkName: "menu01" */ '../views/menu01/Exam03View'),
     children: [
      {
        path: "subacomponent",
        component: () => import(/* webpackChunkName: "menu01" */ '../components/menu01/SubAComponent')
      },
      {
        path: "subbcomponent",
        component: () => import(/* webpackChunkName: "menu01" */ '../components/menu01/SubBComponent')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
