<template>
  <div class="column-item" :id="id">
    <img
      v-if="volState == 0"
      class="vol"
      src="/image/icon_mc.png" 
      alt="全音"
      @click="vol"
      >
    <img
      v-else-if="volState == 1"
      class="vol"
      src="/image/icon_mc_s.png" 
      alt="全音"
      @click="vol"
      >
    <input 
      :id="id"
      ref="processRange"
      class="progress" 
      type="range" 
      :value="processPoint" 
      :max ="duration" 
      min ="0" 
      step="1" 
      @input = "changeProcess()" 
      :style="{background: '-webkit-linear-gradient(top, rgba(12, 179, 185, 1), rgba(97, 250, 255, 1)) 0% 0% / '+ processPoint*100/duration +'% 100% no-repeat'}
      "
      />
    <img
      v-if="muteState == 0"
      class="zero"
      src="/image/icon_mute.png" 
      alt="静音"
      @click="zero"
      >
    <img
      v-else-if="muteState == 1"
      class="zero"
      src="/image/icon_mute_s.png" 
      alt="静音"
      @click="zero"
      >
    <div class="name">{{name}}</div>
  </div>
</template>
  
<script type="text/ecmascript-6">
  export default {
    name:'ColumnItem',
    props:['id','name'],
    data(){
      return{
        processPoint:50,
        duration:'100', //input range总分段
        // 控制静音的显示状态
        muteState:0,
        //控制全音的显示状态
        volState:0,
      }
    },
    methods: {
      //滑动滑块
      changeProcess(){
        var range = this.$refs.processRange;
        this.processPoint = range.value;
        this.judgeState();
      },
      //100%
      vol(){
        this.processPoint = this.duration;
        if (this.volState == 0) {
          this.volState = 1;
          this.muteState = 0;
        }else{
          this.volState = 0;
        }
      },
      //静音
      zero(){
        this.processPoint = 0;
        if (this.muteState == 0) {
          this.muteState = 1;
          this.volState = 0;
        }else{
          this.muteState = 0;
        }
      },
      //判断音量按钮显示状态
      judgeState(){
        if (this.processPoint > 0 ) {
          this.muteState = 0;
          this.volState = 0;
        }else if(this.processPoint == this.duration){
          console.log('全音了');
          this.volState = 1;
          this.muteState = 0;
        }else{
          this.volState = 0;
          this.muteState = 1;
        }
      }
    }
  }
</script>
  
<style scoped>
  .column-item{
    width: 87px;
    height: 230px;
    position: relative;
  }
  /* 滑动条 */
  .progress{
    -webkit-appearance: none;
    transform:rotate(270deg);
    width: 167px;
    height: 9px;
    border-radius: 4px;
    outline: none;
    position:absolute;
    left: 50%;
    top: 50%;
    margin-left: -84px;
    margin-top: -4px;
  }
  /* 全音 */
  .vol{
    width: 13px;
    height: 18px;
    position:absolute;
    left: 50%;
    top: 6%;
    margin-top: -9px;
    margin-left: -7px;
  }
  /* 静音 */
  .zero{
    width: 15px;
    height: 13px;
    position:absolute;
    left: 50%;
    top: 94%;
    margin-top: -6px;
    margin-left: -7px;
  }
  /* 音柱名 */
  .name{
    margin: 0;
    position: relative;
    color:#ffffff;
    left: 32%;
    top: 100%;
  }
  /*input外壳样式*/
  input[type=range] {
    -webkit-appearance: none;
    border-radius: 10px;
    height: 7px;
  }
  /*轨道*/
  input[type=range]::-webkit-slider-runnable-track {
    height: 5px;
    background: rgba(0,0,0,0.1);
    border-radius: 10px;
  }
  /*滑块*/
  input[type=range]::-webkit-slider-thumb {
    margin-top: -8px;
    transform:rotate(270deg);
  }
</style>
