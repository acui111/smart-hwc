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
    <a-slider 
      vertical 
      :default-value='value'
      @change = 'changeProcess'
      @afterChange = 'mouseup'
      />
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
      changeProcess(value){
        this.$events.emit('changeVol',{id:this.id,vol:value});
        let compiled = _.template(_.first(this.commandList));
        this.compiled = compiled({
          volume : _.padStart(_.toUpper(Number(this.value).toString(16)), 2, '0'),
        });
        const rangeValue = (value) % 10;
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
      mouseup(value){
        var range = this.$refs.processRange;
        this.$events.emit('changeVol',{id:this.id,vol:value});
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
  .column-item img{
    cursor: pointer;
  }
  /deep/ .ant-slider-vertical{
    width: 20px;
    height: 165px;
    padding:0;
    margin:0;
    position:absolute;
    left: 50%;
    top: 50%;
    margin-left: -3px;
    margin-top: -84px;
  }
  /deep/ .ant-slider-vertical .ant-slider-rail{
    width: 6px;
    height: 100%;
  }
  /deep/ .ant-slider-rail{
    background-color:rgba(0,0,0,0.1);
  }
  /deep/ .ant-slider:hover .ant-slider-rail{
    background-color:rgba(0,0,0,0.1);
  }
  /deep/ .ant-slider-vertical .ant-slider-step{
    width: 6px;
    height: 100%;
  }
  
  /deep/ .ant-slider-handle{
    width: 16px;
    height: 24px;
    background-image: url(/image/vol.png);
    background-size: 100% 100%;
    border-radius:0%;
    border:none;
    background-color: rgba(255,255,255,0);
  }
  /deep/ .ant-slider-vertical .ant-slider-track{
    width: 6px;
  }
  /deep/ .ant-slider-track{
    background-color:rgb(12, 179, 185);
  }
  /* 全音 */
  .vol{
    width: 13px;
    height: 18px;
    position:absolute;
    left: 50%;
    top: 6%;
    margin-top: -12px;
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
</style>
