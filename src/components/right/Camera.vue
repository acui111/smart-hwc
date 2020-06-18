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
            :src="status == 1? Up : up" 
            alt="向上"
            >
          <img 
            class="down"
            @mousedown="downMouseDown" 
            @mouseup="downMouseUp"
            :src="status == 2? Down : down" 
            alt="向下"
            >
          <img 
            class="left" 
            @mousedown="leftMouseDown" 
            @mouseup="leftMouseUp"
            :src="status == 3? Left : left" 
            alt="向左"
            >
          <img 
            class="right"
            @mousedown="rightMouseDown" 
            @mouseup="rightMouseUp" 
            :src="status == 4? Right : right"
            alt="向右"
            >
        </div>
        <p class="adjust-name">方向调整</p>
      </div>
      <div class="vol-button">
        <img
          :src="status == 5? Add : add"
          style="margin-top:44px"
          @mousedown="addMouseDown" 
          @mouseup="addMouseUp" 
          />
        <img
          :src="status == 6? Reduce : reduce"
          style="margin-top:74px" 
          @mousedown="reduceMouseDown" 
          @mouseup="reduceMouseUp" 
          />
        <p class="focal-name">焦距调整</p>
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
        // 预置位每一项高亮
        isActive: 0,
        // 按钮状态
        status:0,
        up:'/image/button_up.png',
        Up:'/image/button_up_s.png',
        down:'/image/button_down.png',
        Down:'/image/button_down_s.png',
        left:'/image/button_left.png',
        Left:'/image/button_left_s.png',
        right:'/image/button_right.png',
        Right:'/image/button_right_s.png',
        add:'/image/envImg/add.png',
        Add:'/image/envImg/add_s.png',
        reduce:'/image/envImg/reduce.png',
        Reduce:'/image/envImg/reduce_s.png',
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
        this.status = 1;
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
        this.status = 0;
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
        this.status = 2;
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
        this.status = 0;
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
        this.status = 3;
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
        this.status = 0;
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
        this.status = 4;
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
        this.status = 0;
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
        this.status = 5;
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
        this.status = 0;
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
        this.status = 6;
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
        this.status = 0;
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
    font-size:15px;
    margin:0px;
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
    width: calc(100% - 40px);
    height: calc(100% - 360px);
    position:absolute;
    top:50%;
    display: flex;
    justify-content: space-around;
    margin: 50px 10px 0 30px;
  }
  /* 方向调整 */
  .adjust .adjust-button{
    width: 65%;
    position: relative;
    text-align: center;
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
    font-size:14px;
    font-family:SimHei;
    color:#fff;
    position: absolute;
    top: 76%;
    left: 50%;
    margin-left: -32px;
  }
  /* 焦距调整 */
  .vol-button{
    width: 35%;
    height: 100%;
    position: relative;
    text-align: center;
  }
  .vol-button img{
    width: 70px;
    height: 30px;
    cursor: pointer;
  }
  .focal-name{
    font-size:14px;
    font-family:SimHei;
    color:#fff;
    position:absolute;
    top: 76%;
    left: 50%;
    margin-left: -32px;
  }
</style>