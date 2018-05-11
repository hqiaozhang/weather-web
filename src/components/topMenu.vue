
<template>
  <div class='top-menu'>
    <router-link v-for='item in menuList' 
      :key='item.id'
      :to="'/'+item.path"
      >
      {{item.name}}
    </router-link>  
  </div>
</template>

<script>
 
export default {
  name: 'TopMenu',
  props:  {
    menuList: Array
  }
}
 
</script>

<style lang="scss" scoped>
.top-menu {
  margin: 0 auto;
  width: 1200px;
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: space-around;
  font-size: 16px;
  font-weight: bold;
  
}
.top-menu a{
  text-decoration: none;
  color: #000;
}
</style>


