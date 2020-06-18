<template>
  <div id="layout-mode-list">
    <div class="layout-button">
      <template v-for="scene in sceneList">
        <div
          :id="scene.id"
          @click="selectedMode(scene.id,scene.commandList)"
          style="cursor: pointer"
          >
          <img
            :src="scene.id == isActive? Src: src"
            alt="大屏"
            />
          <p class="screen-name">{{scene.name}}</p>
        </div>
      </template>
    </div>
    <template v-for="(layout,index) in sceneList">
      <LayoutModeItem
        :screenListId="screenListId"
        :id="layout.id"
        :layerList="layout.layerList"
      />
    </template>
  </div>
</template>

<script>
  import LayoutModeItem from './LayoutModeItem';
  export default {
    data(){
      return{
        isActive: 1,
        src:'/image/button_pattern.png',
        Src:'/image/button_pattern_s.png',
        sceneList:[],
        screenListId:null,
      }
    },
    components:{
      LayoutModeItem
    },
    methods:{
      selectedMode(modeId,commandList){
        this.isActive = modeId;
        this.$events.emit('selectedMode',({id:modeId}));
        this.$http.post('/api/controls',{
          "type": "DISPLAY",
          "action": "PRESET",
          "orders": commandList
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
    mounted(){
      this.$http.get('/api/configs')
      .then(response=>{
        const result = response.data;
        const screenList = _.first(result.data.screenList);
        this.screenListId = screenList.id;
        this.sceneList = screenList.sceneList;
      })
      .catch(error=>{
        this.$message.error(error.response.data.message);
      })
    }
  }
</script>

<style>
  .layout-button{
    height: 30px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }
  .layout-button img{
    width: 86px;
    height: 30px;
  }
  .screen-name{
    width: 50px;
    margin: 0px;
    font-size:14px;
    font-family:SimHei;
    color:rgba(229,248,255,1);
    position: relative;
    left: 50%;
    top: -80%;
    margin-left: -21px;
  }
</style>
