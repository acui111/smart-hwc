<template>
  <div id="layout-mode-item" v-if="this.modeId == this.id">
    <div class="layout-item-container">
      <template v-for="layer in layerList">
        <Layer
          :screenListId="screenListId"
          :id="layer.id"
          :key="layer.id"
          :left="layer.left"
          :top="layer.top"
          :width="layer.width"
          :height="layer.height"
        />
      </template>
    </div>
  </div>
</template>
  
<script type="text/ecmascript-6">
  import Layer from './Layer';
  export default {
    props:['id','layerList','screenListId'],
    data(){
      return{
        modeId:1,
      }
    },
    components:{
      Layer
    },
    mounted(){
      this.$events.on('selectedMode',({id})=>{
        this.modeId = id;
      });
    }
  }
</script>
  
<style scoped>
  #layout-mode-item{
    width: 420px;
    height: 110px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    background:#61CFD6;
  }
  #layout-mode-item .layout-item-container{
    width: 420px;
    height: 110px;
    position: relative;
  }
  
</style>