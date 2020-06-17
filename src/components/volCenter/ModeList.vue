<template>
  <div id="mode-list">
    <template v-for="(volumeMode,index) in this.$editor.configs.volumeModeList">
      <div
        :id="volumeMode.id" 
        @click="selectMode(volumeMode.id,volumeMode.name)"
        :class="{active:volumeMode.id == isActive}"
        style="cursor: pointer"
        >
        <!-- 默认 -->
        <img :src="volumeMode.id == isActive? Src: src" alt="模式">
        <p class='mode-name'>{{volumeMode.name}}</p>
      </div>
    </template>
  </div>
</template>
  
<script type="text/ecmascript-6">
  export default {
    name:'ModelList',
    data(){
      return{
        isActive: 0,
        src:'/image/button_pattern.png',
        Src:'/image/button_pattern_s.png',
        volumeModeList:[],
        commandList:[],
      }
    },
    methods: {
      selectMode(id,name){
        this.commandList = [];
        // 切换模式
        this.$events.emit('editButtonShow',{state:1,id,name});
        this.$events.emit('selectedModeId',{id});
        this.isActive = id;
        const volumeMode = _.find(this.volumeModeList,{id});
        const volumeList = _.flatten(volumeMode.volumeList);
        _.forEach(volumeList,(volume)=>{
          const str = [_.first(volume.commandList)];
          let compiled = _.template(str);
          const commandList = compiled({
            volume : Number(volume.value).toString(16),
          });
          this.commandList.push(commandList);
        })
        // console.log(this.commandList);
        this.$http.post('/api/controls',{
          "type": "VOLUME",
          "action": "SET",
          "orders": this.commandList
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
    },
    mounted(){
      this.$http.get('/api/configs')
      .then(response=>{
        const result = response.data;
        this.volumeModeList = result.data.volumeModeList;
      })
      .catch(error=>{
        this.$message.error(error.response.data.message);
      })
    }
  }
</script>
  
<style scoped>
  #mode-list{
    width: calc(100% - 100px);
    height: 36px;
    margin: 24px 50px 0;
    display: flex;
    justify-content: space-around;
  }
  .mode-name{
    width: 50px;
    margin: 0px;
    font-size:16px;
    font-family:SimHei;
    color:rgba(229,248,255,1);
    position: relative;
    left: 50%;
    top: -80%;
    margin-left: -24px;
  }
  .active{
    background:rgba(18,201,213,1);
  }
</style>