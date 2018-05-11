<template>
  <div class="system-menaga-container auto-center">
    <el-row>
      <el-col :span='5'>
        <SiderBar :menuList='menuList' />
        <!-- <router-view name="siderBar" />  -->
      </el-col>  
      <el-col :span='19'>
        <!-- <transition enter-active-class="slideInRight"> -->
          <router-view /> 
          <!-- <router-view name="myWorktable" />  -->
        <!-- </transition> -->
      </el-col>  
    </el-row>  
  </div>  
</template>

<script>
import SiderBar from '@/components/siderBar.vue'
const menuList = [
  {
    id: '001',
    name: '用户管理',
    path: 'userMenaga'
  },{
    id: '002',
    name: '角色管理',
    path: 'roleMenaga'
  },{
    id: '003',
    name: '权限管理',
    path: 'authorityMenaga'
  }
]
export default {
  name: 'SystemMenaga',
  components: {
    SiderBar
  },
  data() {
    return {
      menuList: menuList
    }
  }
}
</script>
