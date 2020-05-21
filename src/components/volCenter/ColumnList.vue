<template>
  <div id="column-list">
    <template v-for="(columnItem,index) in columnList" >
      <ColumnItem
        :key="index"
        :id="columnItem.id"
        :name="columnItem.name"
      />
    </template>
  </div>
</template>
  
<script type="text/ecmascript-6">
  import ColumnItem from './ColumnItem'
  export default {
    name:'ColumnList',
    components:{
      ColumnItem
    },
    data(){
      return{
        columnList:[
          //每一个音量控制
          {
            id:1,
            name:'坐席1'
          },
          {
            id:2,
            name:'坐席2'
          },
          {
            id:3,
            name:'坐席3'
          },
          {
            id:4,
            name:'坐席4'
          },
          {
            id:5,
            name:'坐席5'
          },
          {
            id:6,
            name:'坐席6'
          },
          {
            id:7,
            name:'坐席7'
          },
          {
            id:8,
            name:'坐席8'
          },
          {
            id:9,
            name:'坐席9'
          },
          {
            id:10,
            name:'坐席10'
          },
          {
            id:11,
            name:'坐席11'
          },
          {
            id:12,
            name:'坐席12'
          },
          {
            id:13,
            name:'坐席13',
          },
          {
            id:14,
            name:'坐席14',
          },
          {
            id:15,
            name:'智讯',
          },
          {
            id:16,
            name:'飞机',
          },
          {
            id:17,
            name:'会议',
          },
        ]
      }
    },
  }
</script>
  
<style scoped>
  #column-list{
    width: calc(100% - 100px);
    height: 634px;
    margin: 55px 0 0 50px;
    display: flex;
    flex-wrap:wrap;
  }
</style>