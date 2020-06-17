<template>
  <div id="layout-mode-list">
    <div class="layout-button">
      <template v-for="scene in sceneList">
        <img
          @click="selectedMode(scene.id,scene.commandList)" 
          id="scene.id"
          class="layout-name" 
          :src="'/image/envImg/screen'+`${scene.id}`+'.png'" 
          alt="大屏"
          />
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
        sceneList:[],
        screenListId:null,
      }
    },
    components:{
      LayoutModeItem
    },
    methods:{
      selectedMode(modeId,commandList){
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
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }
</style>
