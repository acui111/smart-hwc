<template>
  <!-- 固定模式中的每一项 -->
  <div 
    id="mode-item"
    @click="selectMode(id)"
    :class="{active:id == isActive}"
    >
    <!-- 默认 -->
    <img :src="id == isActive? Src: src" alt="模式">
    <div class="name">{{name}}</div>

    <!-- 鼠标点击 -->
    <!-- <img v-else-if="selectModeState == 1" src="/image/button01_s.png">
    <div v-if="selectModeState == 1" class="name" style="color:#00FCFF">{{name}}</div> -->

  </div>
</template>
  
<script type="text/ecmascript-6">
  export default {
    name:'ModeItem',
    props:['id','name'],
    data(){
      return{
        // 0代表默认，1代表点击，-1代表移入
        // selectModeState:0,
        isActive:0,
        Src:'/image/button01_s.png',
        src:'/image/button01.png',
      }
    },
    methods:{
      //选中
      selectMode(id){
        this.isActive = id ;
      },
    }
  }
</script>
  
<style scoped>
  #mode-item{
    width: 80px;
    height: 80px;
    position: relative;
  }
  .name{
    color:#fff;
    font-size:14px;
    font-family:SimHei;
    position:absolute;
    left: 50%;
    top: 50%;
    margin-left: -28px;
    margin-top: -10px;
  }
</style>