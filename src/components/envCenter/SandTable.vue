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
      <!-- 坐席左 -->
      <div class="table-left">
        <img style="width:92px;height:36px" src="/image/envImg/table19.png" alt="坐席19">
        <img style="width:92px;height:36px;margin-top:14px" src="/image/envImg/table20.png" alt="坐席20">
      </div>
      <!-- 坐席右 -->
      <div class="table-right">
        <img style="width:92px;height:36px" src="/image/envImg/table21.png" alt="坐席21">
        <img style="width:92px;height:36px;margin-top:14px" src="/image/envImg/table22.png" alt="坐席22">
      </div>
      <!-- 领导 -->
      <div class="leader">
        <img style="width:92px;height:36px" src="/image/envImg/leader1.png" alt="领导1">
        <img style="width:92px;height:36px;margin-left:27px" src="/image/envImg/leader2.png" alt="领导2">
      </div>
      <!-- 后摄像头 -->
      <div class="rear-camera">
        <img style="width:50px;height:48px" src="/image/envImg/icon9.png" alt="后摄像头">
      </div>
      <!-- 导播 -->
    </div>
    <div class="play">
      <img style="width:203px;height:33px;margin:6px 90px 0 40px" src="/image/envImg/play1.png" alt="导播1">
      <img style="width:203px;height:33px;margin-top:6px" src="/image/envImg/play2.png" alt="导播2">
      <div class="light">
        <img style="width:33px;height:44px;margin:6px 0 0 70px" src="/image/envImg/icon10.png" alt="导播灯">
      </div>
    </div>
  </div>
</template>
  
<script type="text/ecmascript-6">
  export default {
  
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
  .table-left{
    width: 92px;
    height: 86px;
    display: flex;
    flex-direction:column;
    position: absolute;
    left: 30%;
    top: 32%;
    margin-left: -46px;
    margin-top: -43px;
  }
  .table-right{
    width: 92px;
    height: 86px;
    display: flex;
    flex-direction:column;
    position: absolute;
    left: 70%;
    top: 32%;
    margin-left: -46px;
    margin-top: -43px;
  }
  .leader{
    width: 211px;
    height: 36px;
    position: absolute;
    left: 50%;
    top: 64%;
    margin-left: -105px;
    margin-top: -18px;
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
  /* 导播 */
  .play{
    width: 400px;
    height: 50px;
    position:absolute;
    left: 50%;
    bottom: 6%;
    margin-top: -25px;
    margin-left: -160px;
    display: flex;
  }
</style>