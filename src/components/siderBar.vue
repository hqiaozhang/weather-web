<template>
  <el-row class="tac">
  <el-col :span="24">
    <el-menu
      style="width: 200px"
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
        v-for='item in menuList' 
        :index="item.id"
        :key="item.id"
      >
      <el-submenu :index="item.id" v-if=item.children >
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.name}}</span>
        </template>
          <el-menu-item 
          v-show=item.children
          v-for='subItem in item.children'
          @click="handleItem(subItem.path)"
          :index="subItem.id"
          :key="subItem.id" >
            {{subItem.name}}
          </el-menu-item>
      </el-submenu>
      
      <el-menu-item :index="item.id" 
        @click="handleItem(item.path)"
        v-else-if=isEmpty(item.children)>
        <i class="el-icon-setting"></i>
        <span slot="title">{{item.name}}</span>
      </el-menu-item>
    </el-menu>
  </el-col>
  
</el-row>
</template>

<script>
import  { isEmpty } from 'lodash'
import { mapState } from 'vuex'
export default {
  name: 'SiderBar',
  props: {
    menuList: Array
  },
  methods: {
    isEmpty() {
      return isEmpty
    },
    handleItem(path) {
      const { matched } = this.$router.history.current
      
      this.$router.push({
        path: `${matched[0].path}/${path}`
      })
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
