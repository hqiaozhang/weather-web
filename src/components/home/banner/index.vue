<template>
  <div class='banner'>
    <el-carousel indicator-position='outside'>
      <el-carousel-item v-for='(item, index) in this.images' :key='index'>
        <img :src='item' :key='index'>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import banner1 from './images/banner.png'
export default {
  name: 'banner',
  data() {
    return {
      images: [banner1, banner1]
    }
  }
}
</script>

<style>
  .banner {
    width: 100%;
    height: 352px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
