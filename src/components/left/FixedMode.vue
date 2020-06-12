<template>
  <!-- 固定模式 -->
  <div id='fixed-mode'>
    <div class="mode-list">
      <template v-for="(fixdMode,index) in this.$config.fixedModeList" >
        <div
          id="mode-item" 
          @click="selectMode(fixdMode.id,fixdMode.commandList)"
          :class="{active:fixdMode.id == isActive}"
          >
          <!-- 默认 -->
          <img style="width:73px;height:74px" :src="fixdMode.id == isActive? Src: src" alt="模式">
          <div class="name">{{fixdMode.name}}</div>
        </div>
      </template>
    </div>
  </div>
</template>
  
<script type="text/ecmascript-6">
  export default {
    name:'FixedMode',
    data(){
      return{
        isActive: 0,
        Src:'/image/button01_s.png',
        src:'/image/button01.png',
      }
    },
    methods: {
      selectMode(id,commandList){
        this.isActive = id ;
        // console.log('点击发送的指令',commandList);
      }
    },
  }
</script>
  
<style scoped>
  #fixed-mode{
    width: calc(100% - 27px);
    height: 310px;
    background-image: url(/image/fixedMode.png);
    background-size: 100% 100%;
    margin:20px 11px 9px 16px;
    position: relative;
  }
  .mode-list{
    width: calc(100% - 46px);
    height: calc(100% - 95px);
    position:absolute;
    left: 8%;
    top: 26%;
    display: flex;
    justify-content: space-around;
    flex-wrap:wrap;
  }
  #mode-item{
    width: 81px;
    height: 80px;
  }
  #mode-item:hover{
    cursor: pointer;
  }
  #mode-item .name{
    color: #fff;
    font-size:14px;
    font-family:SimHei;
    position: relative;
    left: 50%;
    top: -58%;
    margin-left: -32px;
  }
</style>