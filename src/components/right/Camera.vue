<template>
  <div id="camera">
    <!-- 摄像头图片 -->
    <p class="camera-name">前摄像头</p>
    <img class="picture" src="/image/pic.png" alt="摄像头图片">
    <!-- 选择预置位 -->
    <div class="select-location">
      <div class="input">
        <input v-model="value" readonly unselectable="on">
        <img src="/image/icon_down.png" alt="箭头"  @click="openSelect">
      </div>
      <div class="location-list" v-show="show">
        <ul>
          <li @click="selectLocation(locationItem,index)" v-for="(locationItem,index) in locationList" :key="locationItem.index">
            <div :class="{active:isActive == index}">
              {{ locationItem.name }}
            </div>
          </li>
        </ul>
      </div>
    </div>
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
    data(){
      return{
        value: '自由调整',
        show: false,
        isActive: 0,
        locationList: [
          {
            id:1,
            name:'自由调整',
          },
          {
            id:2,
            name:'预置位一',
          },
          {
            id:3,
            name:'预置位二',
          },
          {
            id:4,
            name:'预置位三',
          },
        ]
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
        this.isActive = index;
        this.show = false;
      }
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
    width: 100px;
    height: 24px;
    background:rgba(27,116,125,1);
    border:1px solid rgba(0,245,255,1);
    border-radius:2px;
    position:absolute;
    top:50%;
    left: 50%;
    margin-left: -50px;
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
    width: 99px;
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
    width: calc(100% - 60px);
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
  .adjust-direction{
    width:124px;
    height: 122px;
    position:absolute;
    left: 50%;
    top: 40%;
    margin-left: -62px;
    margin-top: -61px;
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
    width: 40%;
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