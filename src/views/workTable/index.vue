<template>
  <div class="worktable-container auto-center">
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
import { mapState } from 'vuex'
import SiderBar from '@/components/siderBar.vue'

export default {
  name: 'workTable',
  components: {
    SiderBar,
  },
  computed: {
    ...mapState({
      menuList: state => state.workTable.leftMenu.menuList,
    })
  },
  mounted() {
    // 获取左边导航数据
    this.$store.dispatch('leftMenuRequest')
  }
}
</script>

<style lang="scss" scoped>
 
</style>


