<template>
  <div id="app">
    <Header :menuList = 'menuList' />
    
     <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    
    <div class="main-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Header from '@/components/header/index'
export default {
  name: 'App',
  components: {
    Header,
  },
  computed: mapState({
    menuList: state => state.home.topMenu.menuList,
  }),
  mounted() {
    this.$store.dispatch('topMenuRequest')
  }
}
</script>

<style lang="scss" scoped>
.main-container {
  margin-top: 10px;
}
</style>

 


 
