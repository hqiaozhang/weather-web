
<template>
  <div class="header-box">
    <!-- 左边logo -->
    <div class="left-logo"></div>
    <!-- 右边导航 -->
    <div class="menu-panel">
      <router-link v-for='(item, index) in menuList' 
        :key='index'
        :to="'/'+item.menuUrl"
      >
        {{item.menuName}}
      </router-link>  
    </div>
  </div>
  
</template>

<script>
 
 

export default {
  name:'header-layout',
  props: {
    menuList: Array
  }
}
 
</script>

<style lang="scss" scoped>
.header-box {
    height: 40px;
    background: #1c2d64;
    font-size: 12px;
    position: fixed;
    width: 100%;
    z-index: 99999999;
    border-bottom: solid 2px #131f49;
    top: 0;
    .left-logo {
      float: left;
      background: url('./images/logo.png') no-repeat;
      width: 122px;
      height: 24px;
      margin: 8px 10px;
    }
    .menu-panel{
      padding: 0;
      position: relative;
      float: left;
      font-family: 'Open Sans',sans-serif;
      list-style: none;
      a {
        padding: 12px 14px;
        font-size: 14px;
        float: left;
        color: #adb2c0;
        text-decoration: none;
        display: block;
        -webkit-transition: color 0.2s linear,background 0.2s linear;
        -moz-transition: color 0.2s linear,background 0.2s linear;
        -o-transition: color 0.2s linear,background 0.2s linear;
        transition: color 0.2s linear,background 0.2s linear;
      }
    }
}
</style>

  
