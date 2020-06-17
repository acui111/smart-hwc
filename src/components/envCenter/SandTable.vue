<template>
  <div id='equipments-footer'>
    <!-- 后灯与电子沙盘 -->
    <div id="sand-table">
      <!-- 后灯 -->
      <div class="light">
        <img style="width:33px;height:50px" src="/image/envImg/icon7.png" alt="前灯1">
        <img style="width:33px;height:50px" src="/image/envImg/icon8.png" alt="前灯2">
      </div>
      <!-- 电子沙盘 -->
      <ElectronicTable/>
      <!-- 沙盘左坐席 -->
      <SandTableLeft/>
      <!-- 沙盘右坐席 -->
      <SandTableRight/>
      <!-- 领导 -->
      <LeaderTable/>
      <!-- 后摄像头 -->
      <AfterCamera/>
    </div>
  </div>
</template>
  
<script type="text/ecmascript-6">
import ElectronicTable from './ElectronicTable';
import SandTableLeft from './SandTableLeft';
import SandTableRight from './SandTableRight';
import LeaderTable from './LeaderTable';
import AfterCamera from './AfterCamera';

  export default {
    components:{
      ElectronicTable,
      SandTableLeft,
      SandTableRight,
      LeaderTable,
      AfterCamera
    },
  }
</script>
  
<style scoped>
  #equipments-footer{
    width: 100%;
    height: 340px;
    position: relative;
  }
  #sand-table{
    width: calc(100% - 286px);
    height:260px;
    margin: 0 143px;
    position: relative;
  }
  .light{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    
  }
  /* 后摄像头 */
  .rear-camera{
    width:50px;
    height: 48px;
    position: absolute;
    left: 50%;
    top: 86%;
    margin-left: -25px;
    margin-top: -24px;
  }
</style>