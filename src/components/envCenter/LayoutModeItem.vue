<template>
  <div id="layout-mode-item" v-if="this.modeId == this.id">
    <div class="layout-item-container">
      <template v-for="layer in layerList">
        <div
          :id="layer.id"
          :key="layer.id"
          :style="{
            left: (layer.left/65536) *420 + 'px',
            top: (layer.top/65536)* 110+ 'px',
            width: (layer.width/65536)*420 + 'px',
            height: (layer.height/65536)*110 + 'px',
          }"
        >
        </div>
      </template>
    </div>
  </div>
</template>
  
<script type="text/ecmascript-6">
  export default {
    props:['id','layerList'],
    data(){
      return{
        modeId:1,
      }
    },
    mounted(){
      this.$events.on('selectedMode',({id})=>{
        this.modeId = id;
      })
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
  #layout-mode-item .layout-item-container div{
    position: absolute;
    border:1px solid #666;
  }
</style>