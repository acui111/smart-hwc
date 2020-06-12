<template>
  <div id="camera">
    <!-- 摄像头图片 -->
    <p class="camera-name">{{this.$editor.camera.name}}</p>
    <img class="picture" src="/image/pic.png" alt="摄像头图片">
    <!-- 选择预置位 -->
    <div class="select-location">
      <div class="input" @click="openSelect">
        <input v-model="value" readonly unselectable="on">
        <img src="/image/icon_down.png" alt="箭头">
      </div>
      <div class="location-list" v-show="show">
        <ul>
          <li @click="selectLocation(locationItem,index)" v-for="(locationItem,index) in this.$editor.camera.presetPosition" :key="locationItem.index">
            <div :class="{active:isActive == index}">
              {{ locationItem.name }}
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="adjust">
      <div class="adjust-button">
        <div class="adjust-direction">
          <img class="up" src="/image/button_up.png" alt="向上">
          <img class="down" src="/image/button_down.png" alt="向下">
          <img class="left" src="/image/button_left.png" alt="向左">
          <img class="right" src="/image/button_right.png" alt="向右">
        </div>
      </div>
      <div class="vol-button">
        <button style="margin-top:55px" @click="add">焦距+</button>
        <button style="margin-top:40px" @click="reduce">焦距-</button>
      </div>
    </div>
  </div>
</template>
  
<script type="text/ecmascript-6">
  export default {
    name:'camera',
    data(){
      return{
        value: '选择预置位',
        show: false,
        isActive: 0,
      }
    },
    methods:{
      // 展开下拉框
      openSelect(){
        this.show = !this.show;
      },
      // 选择预置位
      selectLocation(locationItem,index){
        this.value = locationItem.name;
        console.log('选择摄像头的预置位',locationItem.commandList);
        this.isActive = index;
        this.show = false;
      },
      // 放大焦距
      add(){
        const focusList = _.first(this.$editor.camera.focusList);
        // console.log(focusList.commandList);
      },
      // 缩小焦距
      reduce(){
        const focusList = this.$editor.camera.focusList[1];
        // console.log(focusList.commandList);
      }
    },
    mounted(){
      this.$editor.camera = _.first(this.$config.ipCameraList);
    }
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
    left: 39%;
  }
  .picture{
    width: calc(100% - 52px);
    height: 175px;
    margin: 0px 26px;
    position:absolute;
    top: 16%;
  }
  /* 预置位 */
  .select-location{
    width: 110px;
    height: 24px;
    background:rgba(27,116,125,1);
    border:1px solid rgba(0,245,255,1);
    border-radius:2px;
    position:absolute;
    top:50%;
    left: 50%;
    margin-left: -55px;
    margin-top: 10px;
  }
  .input input{
    width: calc(100% - 10px);
    height: 22px;
    background:rgba(27,116,125,1);
    outline: none;
    margin-left: 10px;
    line-height: 22px;
    color:#fff;
    font-size:15px;
    font-family:SimHei;
    position: relative;
  }
  .input img{
    position: absolute;
    top: 45%;
    right:10%;
    margin-top:-3px;
    margin-right:-5px;
  }
  .location-list{
    width: 109px;
    height: 120px;
    background:rgba(27,116,125,1);
    border:1px solid rgba(0,245,255,1);
    position: relative;
    z-index: 10;
    /* overflow-y: auto; */
  }
  .location-list ul li{
    width: 100%;
    height: 30px;
    cursor: pointer;
    text-align: center;
    line-height: 30px;
    color:#fff;
    font-size:15px;
    font-family:SimHei;
  }
  .location-list ul li:hover{
    background-color: #1598a5;
  }
  .active{
    color: #00F5FF;
  }
  .adjust{
    width: 90%;
    height: calc(100% - 360px);
    position:absolute;
    top:50%;
    display: flex;
    justify-content: space-around;
    margin: 50px 30px;
  }
  /* 方向调整 */
  .adjust .adjust-button{
    width: 60%;
    position: relative;
  }
  .adjust .adjust-button .adjust-direction{
    width:150px;
    height: 140px;
    position:relative;
    left: 50%;
    top: 40%;
    margin-left: -75px;
    margin-top: -70px;
    background-image: url(/image/bj_camera.png);
    background-size: 100% 100%;
  }
  .adjust .adjust-button .adjust-direction .up{
    width: 100px;
    height: 56px;
    position:absolute;
    left: 18%;
    top: -2%;
  }
  .adjust .adjust-button .adjust-direction .down{
    width: 100px;
    height: 56px;
    position:absolute;
    right: 18%;
    bottom:-2%;
  }
  .adjust .adjust-button .adjust-direction .left{
    width: 56px;
    height: 100px;
    position:absolute;
    left: -1%;
    top: 16%;
  }
  .adjust .adjust-button .adjust-direction .right{
    width: 56px;
    height: 100px;
    position:absolute;
    right: -1%;
    top:16%;
  }
  .adjust-name{
    font-size:16px;
    font-family:SimHei;
    color:#fff;
    position: absolute;
    top: 76%;
    left: 50%;
    margin-left: -32px;
  }
  /* 焦距调整 */
  .vol-button{
    width: 10%;
    position: relative;
    left: -10%;
    top: 0;
  }
  .vol-button button{
    width: 60px;
    height: 30px;
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
    top: 40%;
    margin-left: -74px;
    margin-top: -4px;
  }
  /*滑块*/
  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    width:19px;
    height: 19px;
    background-image: url(/image/camera_1.png);
    background-size: 100% 100%;
  }
  .focal-name{
    font-size:16px;
    font-family:SimHei;
    color:#fff;
    position:absolute;
    top: 76%;
    left: 50%;
    margin-left: -32px;
  }
  .add{
    position:absolute;
    left: 50%;
    top: 2%;
    margin-left: -7px;
  }
  .subtract{
    position:absolute;
    left: 50%;
    bottom: 25%;
    margin-left: -7px;
  }
</style>