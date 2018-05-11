<template>
  <div class="my-worktable">
    <div id="allmap" class="allmap"></div>
  </div> 
</template>

<script>

export default {
  name: 'MyWorkTable',
  mounted() {
    this.$nextTick(function () {
      let map = new BMap.Map("allmap");    // 创建Map实例
      map.centerAndZoom(new BMap.Point(106.551538,29.558692), 11);  // 初始化地图,设置中心点坐标和地图级别
      //添加地图类型控件
      map.addControl(new BMap.MapTypeControl({
        mapTypes:[
                BMAP_NORMAL_MAP,
                BMAP_HYBRID_MAP
            ]}));	  
      map.setCurrentCity("重庆");          // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
      })
  }
}

</script>

<style lang="scss" scoped>
.my-worktable {
  .allmap {
    width: 100%;
    height: 600px;
  }
}
</style>

