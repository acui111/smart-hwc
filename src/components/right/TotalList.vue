<template>
  <!-- 总调音台 -->
  <div id='total-tuning'>
    <template v-for="(totalItem,index) in totalList" >
      <TotalItem
        :key="index"
        :id="totalItem.id"
        :name="totalItem.name"
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
    data(){
      return{
        totalList:[
          {
            id:1,
            name:'总音量'
          },
          {
            id:2,
            name:'左声道'
          },
          {
            id:1,
            name:'右声道'
          }
        ]
      }
    },
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