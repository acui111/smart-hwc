<template>
  <div id="mode-list">
    <template v-for="(volumeMode,index) in this.$editor.configs.volumeModeList">
      <div
        :id="volumeMode.id" 
        @click="selectMode(volumeMode.id,volumeMode.name)"
        :class="{active:volumeMode.id == isActive}"
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
        Src:'/image/button_pattern_s.png'
      }
    },
    methods: {
      selectMode(id,name){
        // 切换模式
        this.$events.emit('editButtonShow',{state:1,id,name});
        this.$events.emit('selectedModeId',{id});
        this.isActive = id;
      },
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