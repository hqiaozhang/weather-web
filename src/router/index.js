import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home.vue'
import WorkTable from '@/views/workTable'
import MyWorkTable from '@/views/workTable/myWorkTable'
// 系统管理路由
import SystemMenaga from '@/views/systemMenaga'
import UserMenaga from '@/views/systemMenaga/userMenaga.vue'
import RoleMenaga from '@/views/systemMenaga/roleMenaga.vue'
import AuthorityMenaga from '@/views/systemMenaga/authorityMenaga.vue'

Vue.use(Router)

const routes = [
  {
    path: '*',
    redirect: '/realtimePC'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/realtimePC',
    component: SystemMenaga,
    children: [
      {
        path: '/systemMenaga',
        component: UserMenaga
      },
      {
        path: '/systemMenaga/userMenaga',
        component: UserMenaga
      },
      {
        path: '/systemMenaga/roleMenaga',
        component: RoleMenaga
      },
      {
        path: '/systemMenaga/authorityMenaga',
        component: AuthorityMenaga
      }
    ]
  },
  {
    path: '/workTable',
    component: WorkTable,
    // components: {
    //   default: WorkTable,
    //   siderBar: SiderBar,
    //   myWorktable: MyWorkTable
    // },
    // props: { default: true, sidebar: true },
    children: [
      {
        path: '/workTable',
        component: MyWorkTable
      },
      {
        path: '/workTable/myWorkTable',
        component: MyWorkTable
      }, {
        path: '/workTable/shareChange',
        component: MyWorkTable
      }
    ]
  }
]

export default new Router({
  mode: 'history',
  routes
})
