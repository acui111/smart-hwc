<template>
  <div id="column-list">
    <template v-for="(columnItem,index) in columnList" >
      <ColumnItem
        :key="index"
        :id="columnItem.id"
        :name="columnItem.name"
        :value="columnItem.vol"
      />
    </template>
  </div>
</template>
  
<script type="text/ecmascript-6">
  import ColumnItem from './ColumnItem';
  import _ from 'lodash';
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
            name:'坐席1',
            vol:10,
          },
          {
            id:2,
            name:'坐席2',
            vol:20,
          },
          {
            id:3,
            name:'坐席3',
            vol:30,
          },
          {
            id:4,
            name:'坐席4',
            vol:40,
          },
          {
            id:5,
            name:'坐席5',
            vol:50,
          },
          {
            id:6,
            name:'坐席6',
            vol:60,
          },
          {
            id:7,
            name:'坐席7',
            vol:70,
          },
          {
            id:8,
            name:'坐席8',
            vol:80,
          },
          {
            id:9,
            name:'坐席9',
            vol:90,
          },
          {
            id:10,
            name:'坐席10',
            vol:100,
          },
          {
            id:11,
            name:'坐席11',
            vol:90,
          },
          {
            id:12,
            name:'坐席12',
            vol:80,
          },
          {
            id:13,
            name:'坐席13',
            vol:70,
          },
          {
            id:14,
            name:'坐席14',
            vol:60,
          },
          {
            id:15,
            name:'智讯',
            vol:50,
          },
          {
            id:16,
            name:'飞机',
            vol:40,
          },
          {
            id:17,
            name:'会议',
            vol:0,
          },
        ]
      }
    },
    mounted(){
      this.$events.on('changeVol',({id,vol})=>{
        const columnItem = _.find(this.columnList,{id});
        columnItem.vol = vol;
        this.$events.emit('vols',{vols:this.columnList});
      });
    }
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