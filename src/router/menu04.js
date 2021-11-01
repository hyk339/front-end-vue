export default[
  {
    path: "/menu04/exam01props",
    component: () => import(/* webpackChunkName: "menu04" */ '../views/menu04/exam01Props')
  },
  {
    path: "/menu04/exam02eventemit",
    component: () => import(/* webpackChunkName: "menu04" */ '../views/menu04/exam02EventEmit')
  },
  {
    path: "/menu04/exam03inject",
    component: () => import(/* webpackChunkName: "menu04" */ '../views/menu04/exam03Inject')
  },
  {
    path: "/menu04/exam04ref",
    component: () => import(/* webpackChunkName: "menu04" */ '../views/menu04/exam04Ref')
  }
]