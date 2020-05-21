<template>
  <div id="camera">
    <!-- 摄像头图片 -->
    <p class="camera-name">前摄像头</p>
    <img class="picture" src="/image/pic.png" alt="摄像头图片">
    <div class="adjust">
      <div class="adjust-button">
        <img class="adjust-direction" src="/image/camera.png" alt="摄像头方向调整">
        <p class="adjust-name">方向调整</p>
      </div>
      <div class="vol-button">
        <input type="range" class="progress">
        <img class="add" src="/image/add.png" alt="加号">
        <p class="focal-name">焦距调整</p>
        <img class="subtract" src="/image/subtract.png" alt="减号">
      </div>
    </div>
  </div>
</template>
  
<script type="text/ecmascript-6">
  export default {
    name:'camera',
  }
</script>
  
<style scoped>
  #camera{
    width: calc(100% - 27px);
    height: calc(100% - 355px);
    background-image: url(/image/camera_bj.png);
    background-size: 100% 100%;
    margin:0px 16px 16px 11px;
    position: relative;
  }
  .camera-name{
    width: 63px;
    height: 15px;
    font-size:15px;
    font-family:SimHei;
    font-weight:bold;
    color:rgba(239,254,255,1);
    position:absolute;
    top: 11%;
    left: 50%;
    margin-left: -50px;
  }
  .picture{
    width: 250px;
    height: 160px;
    position:absolute;
    top: 16%;
    left: 10%;
  }
  .adjust{
    width: calc(100% - 60px);
    height: calc(100% - 330px);
    position:absolute;
    top:50%;
    display: flex;
    justify-content: space-around;
    margin: 0 30px;
  }
  /* 方向调整 */
  .adjust .adjust-button{
    width: 50%;
    height: 100%;
    position: relative;
    /* background:#eee; */
  }
  .adjust-direction{
    width:124px;
    height: 122px;
    position:absolute;
    left: 50%;
    top: 50%;
    margin-left: -62px;
    margin-top: -61px;
  }
  .adjust-name{
    font-size:16px;
    font-family:SimHei;
    color:#fff;
    position: absolute;
    top: 80%;
    left: 50%;
    margin-left: -32px;
  }
  /* 焦距调整 */
  .vol-button{
    width: 50%;
    height: 100%;
    position: relative;
  }
  /* 滑动条 */
  .progress{
    -webkit-appearance: none;
    transform:rotate(270deg);
    width: 148px;
    height: 9px;
    border-radius: 4px;
    outline: none;
    position: absolute;
    background:#062C30;
    left: 50%;
    top: 50%;
    margin-left: -74px;
    margin-top: -4px;
  }
  /*滑块*/
  input[type=range]::-webkit-slider-thumb {
    transform:rotate(270deg);
  }
  .focal-name{
    font-size:16px;
    font-family:SimHei;
    color:#fff;
    position:absolute;
    top: 80%;
    left: 50%;
    margin-left: -32px;
  }
  .add{
    position:absolute;
    left: 50%;
    top: 18%;
    margin-left: -7px;
  }
  .subtract{
    position:absolute;
    left: 50%;
    bottom: 21%;
    margin-left: -7px;
  }
</style>