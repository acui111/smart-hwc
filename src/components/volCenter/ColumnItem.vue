<template>
  <div 
    class="column-item" 
    >
    <img
      v-if="this.value == 100"
      class="vol"
      src="/image/icon_mc_s.png" 
      alt="全音"
      @click="vol"
      >
    <img
      v-else
      class="vol"
      src="/image/icon_mc.png" 
      alt="全音"
      @click="vol"
      >
    <div :title="title">
      <input
        :id="id"
        ref="processRange"
        class="progress" 
        type="range" 
        :value="value" 
        :max ="duration" 
        min ="0" 
        step="1" 
        @input = "changeProcess"
        @mouseup="mouseup"
        :style="{background: '-webkit-linear-gradient(top, rgba(12, 179, 185, 1), rgba(97, 250, 255, 1)) 0% 0% / '+ value*100/duration +'% 100% no-repeat'}
        "
        />
      </div>
    </a-tooltip>
    <img
      v-if="this.value == 0"
      class="zero"
      src="/image/icon_mute_s.png" 
      alt="静音"
      @click="zero"
      >
    <img
      v-else-if="this.muteStatus == 1"
      class="zero"
      src="/image/icon_mute_s.png" 
      alt="静音"
      @click="zero"
      >
    <img
      v-else
      class="zero"
      src="/image/icon_mute.png" 
      alt="静音"
      @click="zero"
      >
    <div class="name">{{name}}</div>
  </div>
</template>
  
<script type="text/ecmascript-6">
  import _ from 'lodash';
  export default {
    name:'ColumnItem',
    props:['id','name',"value","commandList"],
    data(){
      return{
        title:this.value+'%',
        //音量最大范围
        duration:'100', 
        // 控制静音的显示状态
        muteState:0,
        //控制全音的显示状态
        volState:0,
        // 点击静音高亮状态
        muteStatus:0,
        // 指令
        compiled:[],
      }
    },
    methods: {
      //滑动滑块
      changeProcess(){
        var range = this.$refs.processRange;
        this.$events.emit('changeVol',{id:this.id,vol:range.value});
        let compiled = _.template(_.first(this.commandList));
        this.compiled = compiled({
          volume : _.padStart(_.toUpper(Number(this.value).toString(16)), 2, '0'),
        });
        const rangeValue = (range.value) % 10;
        if (rangeValue == 0) {
          this.$http.post('/api/controls',{
            "type": "VOLUME",
            "action": "SET",
            "orders": [this.compiled]
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
      // 鼠标抬起
      mouseup(){
        var range = this.$refs.processRange;
        this.$events.emit('changeVol',{id:this.id,vol:range.value});
        let compiled = _.template(_.first(this.commandList));
        this.compiled = compiled({
          volume : _.padStart(_.toUpper(Number(this.value).toString(16)), 2, '0'),
        });
        this.$http.post('/api/controls',{
          "type": "VOLUME",
          "action": "SET",
          "orders": [this.compiled]
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
      //100%
      vol(){
        this.$events.emit('changeVol',{id:this.id,vol:100});
      },
      //静音
      zero(){
        // 当前静音状态
        if (this.muteStatus == 1) {
          // 发送取消静音的指令
          let compiled = _.template(this.commandList[2]);
          this.compiled = compiled({
            volume : _.padStart(_.toUpper(Number(this.value).toString(16)), 2, '0'),
          });
          console.log(this.compiled);
          this.$http.post('/api/controls',{
            "type": "VOLUME",
            "action": "SET",
            "orders": [this.compiled]
          })
          .then(response=>{
            const result = response.data;
            if (!result.successful) {
              this.$message.error(result.message);
            }
            this.muteStatus = 0;
          })
          .catch(error=>{
            this.$message.error(error.response.data.message);
          })
        }
        // 不是静音状态
        else{
          // 发送静音的指令
          let compiled = _.template(this.commandList[1]);
          this.compiled = compiled({
            volume : _.padStart(_.toUpper(Number(this.value).toString(16)), 2, '0'),
          });
          console.log(this.compiled);
          this.$http.post('/api/controls',{
            "type": "VOLUME",
            "action": "SET",
            "orders": [this.compiled]
          })
          .then(response=>{
            const result = response.data;
            if (!result.successful) {
              this.$message.error(result.message);
            }
            this.muteStatus = 1;
          })
          .catch(error=>{
            this.$message.error(error.response.data.message);
          })
        }
      },
    },
    mounted(){
      if (this.value == 100) {
        this.volState = 1 ;
      }else if(this.value == 0){
        this.muteState = 1 ;
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
    -webkit-appearance: none;
    width: 24px;
    height: 13px;
    margin-top: -4px;
    background-image: url(/image/vol.png);
    background-size: 100% 100%;
  }
</style>
