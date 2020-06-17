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
          <img 
            class="up"
            @mousedown="upMouseDown" 
            @mouseup="upMouseUp"
            src="/image/button_up.png" 
            alt="向上"
            >
          <img 
            class="down"
            @mousedown="downMouseDown" 
            @mouseup="downMouseUp"
            src="/image/button_down.png" 
            alt="向下"
            >
          <img 
            class="left" 
            @mousedown="leftMouseDown" 
            @mouseup="leftMouseUp"
            src="/image/button_left.png" 
            alt="向左"
            >
          <img 
            class="right"
            @mousedown="rightMouseDown" 
            @mouseup="rightMouseUp" 
            src="/image/button_right.png" 
            alt="向右"
            >
        </div>
      </div>
      <div class="vol-button">
        <img
          src="/image/envImg/add.png"
          style="margin-top:55px"
          @mousedown="addMouseDown" 
          @mouseup="addMouseUp" 
          />
        <img
          src="/image/envImg/reduce.png"
          style="margin-top:40px" 
          @mousedown="reduceMouseDown" 
          @mouseup="reduceMouseUp" 
          />
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
        this.isActive = index;
        this.show = false;
        this.$http.post('/api/controls',{
          "type": "IPC",
          "action": "PRESET",
          "orders":locationItem.commandList
        })
        .then(response=>{
          const result = response.data;
          if (!result.successful) {
            this.$message.error(result.message);
          }
        })
        .catch(error=>{
          this.$message.error(error.response.data.message);
        })
      },

      // 摄像头向上按下
      upMouseDown(){
        if (this.$editor.camera.name == '前摄像头') {
          const downCommandList = _.first(this.$editor.configs.ipCameraList).directionList[2];
          const downCommand = _.first(downCommandList.commandList);
          this.$http.post('/api/controls',{
            "type": "IPC",
            "action": "UP",
            "orders": [
              downCommand
            ]
          })
          .then(response=>{
            const result = response.data;
            if (!result.successful) {
              this.$message.error(result.message);
            }
          })
          .catch(error=>{
            this.$message.error(error.response.data.message);
          })
        }else{
          const downCommandList = this.$editor.configs.ipCameraList[1].directionList[2];
          const downCommand = _.first(downCommandList.commandList);
          this.$http.post('/api/controls',{
            "type": "IPC",
            "action": "UP",
            "orders": [
              downCommand
            ]
          })
          .then(response=>{
            const result = response.data;
            if (!result.successful) {
              this.$message.error(result.message);
            }
          })
          .catch(error=>{
            this.$message.error(error.response.data.message);
          })
        }
      },
      // 摄像头向上释放
      upMouseUp(){
        if (this.$editor.camera.name == '前摄像头') {
          const upCommandList = _.first(this.$editor.configs.ipCameraList).directionList[2];
          const upCommand = upCommandList.commandList[1];
          this.$http.post('/api/controls',{
            "type": "IPC",
            "action": "UP",
            "orders": [
              upCommand
            ]
          })
          .then(response=>{
            const result = response.data;
            if (!result.successful) {
              this.$message.error(result.message);
            }
          })
          .catch(error=>{
            this.$message.error(error.response.data.message);
          })
        }else{
          const upCommandList = this.$editor.configs.ipCameraList[1].directionList[2];
          const upCommand = upCommandList.commandList[1];
          this.$http.post('/api/controls',{
            "type": "IPC",
            "action": "UP",
            "orders": [
              upCommand
            ]
          })
          .then(response=>{
            const result = response.data;
            if (!result.successful) {
              this.$message.error(result.message);
            }
          })
          .catch(error=>{
            this.$message.error(error.response.data.message);
          })
        }
      },

      // 摄像头向下按下
      downMouseDown(){
        if (this.$editor.camera.name == '前摄像头') {
          const downCommandList = _.first(this.$editor.configs.ipCameraList).directionList[3];
          const downCommand = _.first(downCommandList.commandList);
          this.$http.post('/api/controls',{
            "type": "IPC",
            "action": "DOWN",
            "orders": [
              downCommand
            ]
          })
          .then(response=>{
            const result = response.data;
            if (!result.successful) {
              this.$message.error(result.message);
            }
          })
          .catch(error=>{
            this.$message.error(error.response.data.message);
          })
        }else{
          const downCommandList = this.$editor.configs.ipCameraList[1].directionList[3];
          const downCommand = _.first(downCommandList.commandList);
          this.$http.post('/api/controls',{
            "type": "IPC",
            "action": "DOWN",
            "orders": [
              downCommand
            ]
          })
          .then(response=>{
            const result = response.data;
            if (!result.successful) {
              this.$message.error(result.message);
            }
          })
          .catch(error=>{
            this.$message.error(error.response.data.message);
          })
        }
      },
      // 摄像头向下释放
      downMouseUp(){
        if (this.$editor.camera.name == '前摄像头') {
          const upCommandList = _.first(this.$editor.configs.ipCameraList).directionList[3];
          const upCommand = upCommandList.commandList[1];
          this.$http.post('/api/controls',{
            "type": "IPC",
            "action": "UP",
            "orders": [
              upCommand
            ]
          })
          .then(response=>{
            const result = response.data;
            if (!result.successful) {
              this.$message.error(result.message);
            }
          })
          .catch(error=>{
            this.$message.error(error.response.data.message);
          })
        }else{
          const upCommandList = this.$editor.configs.ipCameraList[1].directionList[3];
          const upCommand = upCommandList.commandList[1];
          this.$http.post('/api/controls',{
            "type": "IPC",
            "action": "UP",
            "orders": [
              upCommand
            ]
          })
          .then(response=>{
            const result = response.data;
            if (!result.successful) {
              this.$message.error(result.message);
            }
          })
          .catch(error=>{
            this.$message.error(error.response.data.message);
          })
        }
      },

      // 摄像头向左按下
      leftMouseDown(){
        if (this.$editor.camera.name == '前摄像头') {
          const downCommandList = _.first(this.$editor.configs.ipCameraList).directionList[0];
          const downCommand = _.first(downCommandList.commandList);
          this.$http.post('/api/controls',{
            "type": "IPC",
            "action": "LEFT",
            "orders": [
              downCommand
            ]
          })
          .then(response=>{
            const result = response.data;
            if (!result.successful) {
              this.$message.error(result.message);
            }
          })
          .catch(error=>{
            this.$message.error(error.response.data.message);
          })
        }else{
          const downCommandList = this.$editor.configs.ipCameraList[1].directionList[0];
          const downCommand = _.first(downCommandList.commandList);
          this.$http.post('/api/controls',{
            "type": "IPC",
            "action": "LEFT",
            "orders": [
              downCommand
            ]
          })
          .then(response=>{
            const result = response.data;
            if (!result.successful) {
              this.$message.error(result.message);
            }
          })
          .catch(error=>{
            this.$message.error(error.response.data.message);
          })
        }
      },
      // 摄像头向左释放
      leftMouseUp(){
        if (this.$editor.camera.name == '前摄像头') {
          const upCommandList = _.first(this.$editor.configs.ipCameraList).directionList[0];
          const upCommand = upCommandList.commandList[1];
          this.$http.post('/api/controls',{
            "type": "IPC",
            "action": "LEFT",
            "orders": [
              upCommand
            ]
          })
          .then(response=>{
            const result = response.data;
            if (!result.successful) {
              this.$message.error(result.message);
            }
          })
          .catch(error=>{
            this.$message.error(error.response.data.message);
          })
        }else{
          const upCommandList = this.$editor.configs.ipCameraList[1].directionList[0];
          const upCommand = upCommandList.commandList[1];
          this.$http.post('/api/controls',{
            "type": "IPC",
            "action": "LEFT",
            "orders": [
              upCommand
            ]
          })
          .then(response=>{
            const result = response.data;
            if (!result.successful) {
              this.$message.error(result.message);
            }
          })
          .catch(error=>{
            this.$message.error(error.response.data.message);
          })
        }
      },

      // 摄像头向右按下
      rightMouseDown(){
        if (this.$editor.camera.name == '前摄像头') {
          const downCommandList = _.first(this.$editor.configs.ipCameraList).directionList[1];
          const downCommand = _.first(downCommandList.commandList);
          this.$http.post('/api/controls',{
            "type": "IPC",
            "action": "RIGHT",
            "orders": [
              downCommand
            ]
          })
          .then(response=>{
            const result = response.data;
            if (!result.successful) {
              this.$message.error(result.message);
            }
          })
          .catch(error=>{
            this.$message.error(error.response.data.message);
          })
        }else{
          const downCommandList = this.$editor.configs.ipCameraList[1].directionList[1];
          const downCommand = _.first(downCommandList.commandList);
          this.$http.post('/api/controls',{
            "type": "IPC",
            "action": "RIGHT",
            "orders": [
              downCommand
            ]
          })
          .then(response=>{
            const result = response.data;
            if (!result.successful) {
              this.$message.error(result.message);
            }
          })
          .catch(error=>{
            this.$message.error(error.response.data.message);
          })
        }
      },
      // 摄像头向右释放
      rightMouseUp(){
        if (this.$editor.camera.name == '前摄像头') {
          const upCommandList = _.first(this.$editor.configs.ipCameraList).directionList[1];
          const upCommand = upCommandList.commandList[1];
          this.$http.post('/api/controls',{
            "type": "IPC",
            "action": "RIGHT",
            "orders": [
              upCommand
            ]
          })
          .then(response=>{
            const result = response.data;
            if (!result.successful) {
              this.$message.error(result.message);
            }
          })
          .catch(error=>{
            this.$message.error(error.response.data.message);
          })
        }else{
          const upCommandList = this.$editor.configs.ipCameraList[1].directionList[1];
          const upCommand = upCommandList.commandList[1];
          this.$http.post('/api/controls',{
            "type": "IPC",
            "action": "RIGHT",
            "orders": [
              upCommand
            ]
          })
          .then(response=>{
            const result = response.data;
            if (!result.successful) {
              this.$message.error(result.message);
            }
          })
          .catch(error=>{
            this.$message.error(error.response.data.message);
          })
        }
      },


      // 放大焦距按下
      addMouseDown(){
        if (this.$editor.camera.name == '前摄像头') {
          const focusList = _.first(this.$editor.configs.ipCameraList).focusList[0];
          const downCommand = _.first(focusList.commandList);
          this.$http.post('/api/controls',{
            "type": "IPC",
            "action": "ZOOMI-IN",
            "orders": [
              downCommand
            ]
          })
          .then(response=>{
            const result = response.data;
            if (!result.successful) {
              this.$message.error(result.message);
            }
          })
          .catch(error=>{
            this.$message.error(error.response.data.message);
          })
        }else{
          const focusList = this.$editor.configs.ipCameraList[1].focusList[0];
          const downCommand = _.first(focusList.commandList);
          this.$http.post('/api/controls',{
            "type": "IPC",
            "action": "ZOOMI-IN",
            "orders": [
              downCommand
            ]
          })
          .then(response=>{
            const result = response.data;
            if (!result.successful) {
              this.$message.error(result.message);
            }
          })
          .catch(error=>{
            this.$message.error(error.response.data.message);
          })
        }
      },
      // 放大焦距释放
      addMouseUp(){
        if (this.$editor.camera.name == '前摄像头') {
          const focusList = _.first(this.$editor.configs.ipCameraList).focusList[0];
          const upCommand = focusList.commandList[1];
          this.$http.post('/api/controls',{
            "type": "IPC",
            "action": "ZOOMI-IN",
            "orders": [
              upCommand
            ]
          })
          .then(response=>{
            const result = response.data;
            if (!result.successful) {
              this.$message.error(result.message);
            }
          })
          .catch(error=>{
            this.$message.error(error.response.data.message);
          })
        }else{
          const focusList = this.$editor.configs.ipCameraList[1].focusList[0];
          const upCommand = focusList.commandList[1];
          this.$http.post('/api/controls',{
            "type": "IPC",
            "action": "ZOOMI-IN",
            "orders": [
              upCommand
            ]
          })
          .then(response=>{
            const result = response.data;
            if (!result.successful) {
              this.$message.error(result.message);
            }
          })
          .catch(error=>{
            this.$message.error(error.response.data.message);
          })
        }
      },

      // 缩小焦距按下
      reduceMouseDown(){
        if (this.$editor.camera.name == '前摄像头') {
          const focusList = _.first(this.$editor.configs.ipCameraList).focusList[1];
          const downCommand = _.first(focusList.commandList);
          this.$http.post('/api/controls',{
            "type": "IPC",
            "action": "ZOOM-OUT",
            "orders": [
              downCommand
            ]
          })
          .then(response=>{
            const result = response.data;
            if (!result.successful) {
              this.$message.error(result.message);
            }
          })
          .catch(error=>{
            this.$message.error(error.response.data.message);
          })
        }else{
          const focusList = this.$editor.configs.ipCameraList[1].focusList[1];
          const downCommand = _.first(focusList.commandList);
          this.$http.post('/api/controls',{
            "type": "IPC",
            "action": "ZOOM-OUT",
            "orders": [
              downCommand
            ]
          })
          .then(response=>{
            const result = response.data;
            if (!result.successful) {
              this.$message.error(result.message);
            }
          })
          .catch(error=>{
            this.$message.error(error.response.data.message);
          })
        }
      },
      // 缩小焦距释放
      reduceMouseUp(){
        if (this.$editor.camera.name == '前摄像头') {
          const focusList = _.first(this.$editor.configs.ipCameraList).focusList[1];
          const upCommand = focusList.commandList[1];
          this.$http.post('/api/controls',{
            "type": "IPC",
            "action": "ZOOM-OUT",
            "orders": [
              upCommand
            ]
          })
          .then(response=>{
            const result = response.data;
            if (!result.successful) {
              this.$message.error(result.message);
            }
          })
          .catch(error=>{
            this.$message.error(error.response.data.message);
          })
        }else{
          const focusList = this.$editor.configs.ipCameraList[1].focusList[1];
          const upCommand = focusList.commandList[1];
          this.$http.post('/api/controls',{
            "type": "IPC",
            "action": "ZOOM-OUT",
            "orders": [
              upCommand
            ]
          })
          .then(response=>{
            const result = response.data;
            if (!result.successful) {
              this.$message.error(result.message);
            }
          })
          .catch(error=>{
            this.$message.error(error.response.data.message);
          })
        }
      },
    },
    mounted(){
      this.$http.get('/api/configs')
      .then(response=>{
        const result = response.data;
        this.$editor.camera = _.first(result.data.ipCameraList);
      })
      
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
    cursor: pointer;
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
    width: 70%;
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
    cursor: pointer;
  }
  .adjust .adjust-button .adjust-direction{
    width:151px;
    height: 144px;
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
    height: 50px;
    position:absolute;
    left: 16%;
    top: 3%;
  }
  .adjust .adjust-button .adjust-direction .down{
    width: 100px;
    height: 50px;
    position:absolute;
    right: 17%;
    bottom: 3%;
  }
  .adjust .adjust-button .adjust-direction .left{
    width: 50px;
    height: 98px;
    position:absolute;
    left: 4%;
    top: 16%;
  }
  .adjust .adjust-button .adjust-direction .right{
    width: 50px;
    height: 98px;
    position:absolute;
    right: 4%;
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
    left: 0;
    top: 0;
  }
  .vol-button img{
    width: 70px;
    height: 30px;
    cursor: pointer;
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