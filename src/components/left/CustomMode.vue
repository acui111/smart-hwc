<template>
  <!-- 自定义预案 -->
  <div id="custom">
    <div class="custom-list">
      <template v-for="(customMode,index) in this.$editor.configs.customModeList">
        <div
          id="custom-item" 
          @click="selectMode(customMode.id,customMode.commandList)"
          :class="{active:customMode.id == isActive}"
          >
          <!-- 默认 -->
          <img style="width:73px;height:73px" :src="customMode.id == isActive? Src: src" alt="模式">
          <div class="name">{{customMode.name}}</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name:'Custom',
    data(){
      return{
        Src:'/image/button01_s.png',
        src:'/image/button01.png',
        // 是否选中
        isActive: 0,
      }
    },
    methods: {
      selectMode(id,commandList){
        this.isActive = id ;
        this.$http.post('/api/controls',{
          "type": "MODE",
          "action": "SELECT",
          "orders": commandList
        })
        .then(response=>{
          const result = response.data;
          if (result.successful) {
            this.$message.success(result.message);
          }else{
            this.$message.error(result.message);
          }
        })
        .catch(error=>{
          this.$message.error(error.response.data.message);
        })
      },
    }
  }
</script>

<style>
  #custom{
    width: calc(100% - 27px);
    height: calc(100% - 355px);;
    background-image: url(/image/custom.png);
    background-size: 100% 100%;
    margin:0px 11px 16px 16px;
    position: relative;
  }
  .custom-list{
    width: calc(100% - 46px);
    position:absolute;
    left: 8%;
    top: 13%;
    display: flex;
    justify-content: space-around;
    flex-wrap:wrap;
  }
  #custom-item{
    width: 81px;
    height: 80px;
    margin-bottom:24px;
    position: relative;
  }
  #custom-item:hover{
    cursor: pointer;
  }
  #custom-item .name{
    width: 50px;
    color:#fff;
    font-size:14px;
    font-family:SimHei;
    position: absolute;
    left: 50%;
    top: 20%;
    margin-left: -26px;

  }
  .edit{
    width: 22px;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position:absolute;
    top: 0;
    right: -17%;
  }
  .edit img{
    width: 14px;
    height: 14px;
  }
</style>