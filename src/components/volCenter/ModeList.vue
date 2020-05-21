<template>
  <div id="mode-list">
    <template v-for="(modeItem,index) in modeList">
      <div
        :id="modeItem.id" 
        @click="selectMode(modeItem.id)"
        :class="{active:modeItem.id == isActive}"
        >
        <!-- 默认 -->
        <img :src="modeItem.id == isActive? Src: src" alt="模式">
        <p class='mode-name'>{{modeItem.name}}</p>
      </div>
    </template>
  </div>
</template>
  
<script type="text/ecmascript-6">
  export default {
    name:'ModelList',
    data(){
      return{
        modeList:[
          {
            id:1,
            name:'默认'
          },
          {
            id:2,
            name:'模式1'
          },
          {
            id:3,
            name:'模式2'
          },
          {
            id:4,
            name:'模式3'
          },
          {
            id:5,
            name:'模式4'
          },
          {
            id:6,
            name:'模式5'
          }
        ],
        isActive: 1,
        src:'/image/button_pattern.png',
        Src:'/image/button_pattern_s.png'
      }
    },
    methods: {
      selectMode(id){
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
    width: 40px;
    margin: 0px;
    font-size:16px;
    font-family:SimHei;
    color:rgba(229,248,255,1);
    position: relative;
    left: 50%;
    top: -80%;
    margin-left: -20px;
  }
  .active{
    background:rgba(18,201,213,1);

  }
</style>