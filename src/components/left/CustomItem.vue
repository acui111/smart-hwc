<template>
  <!-- 自定义预案的每一项 -->
  <div 
    class="custom-item"
    :id="id"
    @click="selectCustom"
    @mousemove="mousemove"
    @mouseout="mouseout"
    >
    <!-- 默认 -->
    <img v-if="selectCustomState == 0" src="/image/button01.png">
    <div v-if="selectCustomState == 0" class="name">{{name}}</div>

    <!-- 鼠标移入 -->
    <img v-else-if="selectCustomState == 1" src="/image/button01_n.png">
    <div v-if="selectCustomState == 1" class="name">{{name}}</div>
    
    <!-- 鼠标点击 -->
    
  </div>
</template>
  
<script type="text/ecmascript-6">
  export default {
    name:'CustomItem',
    props:['id','name'],
    data(){
      return{
        //默认
        selectCustomState:0,
        //点击选中
        selected:0,
      }
    },
    methods: {
      //选择自定义
      selectCustom(){

      },
      //鼠标移入
      mousemove(){
        this.selectCustomState = 1;
        this.selected = 0;
      },
      //鼠标移出
      mouseout(){
        this.selectCustomState = 0;
        this.selected = 0;
      }
    }
  }
</script>
  
<style scoped>
  .custom-item{
    width: 80px;
    height: 80px;
    position: relative;
    margin-top: 26px;
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