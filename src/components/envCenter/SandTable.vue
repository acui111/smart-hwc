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
      <div class="sand-table">
        <img style="width:172px;height:111px" src="/image/envImg/sand_table.png" alt="电子沙盘">
      </div>
      <!-- 沙盘左坐席 -->
      <SandTableLeft/>
      <!-- 沙盘右坐席 -->
      <SandTableRight/>
      <!-- 领导 -->
      <LeaderTable/>
      <!-- 后摄像头 -->
      <div class="rear-camera">
        <img style="width:50px;height:48px" src="/image/envImg/icon9.png" alt="后摄像头" @click="switchCamera">
      </div>
    </div>
    <!-- 导播 -->
    <VolTable/>
  </div>
</template>
  
<script type="text/ecmascript-6">
import SandTableLeft from './SandTableLeft';
import SandTableRight from './SandTableRight';
import LeaderTable from './LeaderTable';
import VolTable from './VolTable';
  export default {
    components:{
      SandTableLeft,
      SandTableRight,
      LeaderTable,
      VolTable
    },
    methods:{
      switchCamera(){
        this.$editor.camera = this.$config.ipCameraList[1];
        // console.log('摄像头切换指令',this.$editor.camera.commandList);
      }
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
  .sand-table{
    width: 172px;
    height: 111px;
    position:absolute;
    left: 50%;
    top: 32%;
    margin-left: -86px;
    margin-top: -55px;
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