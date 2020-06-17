<template>
  <!-- 所有的设备 -->
  <div id="equipments">
    <!-- 前摄像头与空调 -->
    <div class="equipment-header">
      <FrontCamera/>
      <div class="air-conditioner">
        <img style="width:36px;height:44px" class="air1" src="/image/envImg/icon2.png" alt="空调1">
        <img style="width:36px;height:44px" src="/image/envImg/icon2.png" alt="空调2">
      </div>
    </div>
    <!-- 大屏幕 -->
    <div class="screen">
      <LayoutModeList class="screen1"/>
      <div class="light">
        <img style="width:33px;height:50px" src="/image/envImg/icon5.png" alt="前灯1">
        <img style="width:33px;height:50px" src="/image/envImg/icon6.png" alt="前灯2">
      </div>
    </div>
  </div>
</template>
  
<script type="text/ecmascript-6">
  import LayoutModeList from './LayoutModeList';
  import FrontCamera from './FrontCamera';
  export default {
    components:{
      LayoutModeList,
      FrontCamera
    },
  }
</script>
  
<style scoped>
  #equipments{
    width: calc(100% - 200px);
    margin: 10px 100px 0;
  }
  /* 前摄像头和空调 */
  .equipment-header{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .air-conditioner{
    position:absolute;
    top: 0;
    right:0;
  }
  .air1{
    margin-right:55px;
  }
  /* 大屏 */
  .screen {
    width: 100%;
    height: 150px;
    position: relative;
  }
  .screen .screen1{
    width: 421px;
    height: 110px;
    position:absolute;
    left: 50%;
    top: 50%;
    margin-left: -210px;
    margin-top: -80px;
  }
  .light{
    width: calc(100% - 80px);
    height:39px;
    position: absolute;;
    left:0;
    bottom: 0;
    margin:0 40px;
    display: flex;
    justify-content: space-between;
  }
</style>