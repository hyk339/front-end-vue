export default[
  {
    path: "/menu07/exam01asynccontrol",
    component: () => import(/* webpackChunkName: "menu06" */ '../views/menu07/Exam01AsyncControl')
  },
  {
    path: "/menu07/auth/jwtauth",
    component: () => import(/* webpackChunkName: "menu06" */ '../views/menu07/auth/JwtAuth.vue')
  },
  {
    path: "/menu07/board/list",
    component: () => import(/* webpackChunkName: "menu06" */ '../views/menu07/board/List.vue')
  },
  {
    path: "/menu07/board/writeForm",
    component: () => import(/* webpackChunkName: "menu06" */ '../views/menu07/board/WriteForm.vue')
  },
  {
    path: "/menu07/board/read",
    component: () => import(/* webpackChunkName: "menu06" */ '../views/menu07/board/Read.vue')
  },
  {
    path: "/menu07/board/updateForm",
    component: () => import(/* webpackChunkName: "menu06" */ '../views/menu07/board/UpdateForm.vue')
  },
]