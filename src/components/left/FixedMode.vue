<template>
  <!-- 固定模式 -->
  <div id='fixed-mode'>
    <div class="mode-list">
      <template v-for="(modeItem,index) in modeList" >
        <div
          id="mode-item" 
          @click="selectMode(modeItem.id)"
          :class="{active:modeItem.id == isActive}"
          >
          <!-- 默认 -->
          <img style="width:73px;height:74px" :src="modeItem.id == isActive? Src: src" alt="模式">
          <div class="name">{{modeItem.name}}</div>
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
        modeList:[
          {
            id:1,
            name:'一键全开'
          },
          {
            id:2,
            name:'一键全关'
          },
          {
            id:3,
            name:'会议模式'
          },
          {
            id:4,
            name:'早间模式'
          },
          {
            id:5,
            name:'午间模式'
          },
          {
            id:6,
            name:'晚间模式'
          }
        ],
        isActive: 0,
        Src:'/image/button01_s.png',
        src:'/image/button01.png',
      }
    },
    methods: {
      selectMode(id){
        this.isActive = id ;
      }
    }
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
  .name{
    font-size:14px;
    font-family:SimHei;
    position: relative;
    left: 50%;
    top: -58%;
    margin-left: -32px;
  }
</style>