<template>
  <!-- 总调音台 -->
  <div id='total-tuning'>
    <template v-for="(totalItem,index) in this.$editor.allVol" >
      <TotalItem
        :key="index"
        :id="totalItem.id"
        :name="totalItem.name"
        :value="totalItem.value"
        :commandList="totalItem.commandList"
      />
    </template>
  </div>
</template>
  
<script type="text/ecmascript-6">
  import TotalItem from './TotalItem';
  export default {
    name:'totalTuning',
    components:{
      TotalItem
    },
    mounted(){
      this.$events.on('changeAllVol',({id,vol})=>{
        const columnItem = _.find(this.$editor.allVol,{id});
        columnItem.value = vol;
      });
    }
  }
</script>
  
<style scoped>
  #total-tuning{
    width: calc(100% - 27px);
    height: 310px;
    background-image: url(/image/TotalTuning.png);
    background-size: 100% 100%;
    margin:20px 16px 9px 11px;
    display: flex;
    justify-content: space-around;
    flex-wrap:wrap;
  }
</style>