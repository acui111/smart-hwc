<template>
  <div id="column-list">
    <!-- 坐席 -->
    <template v-for="(column,index) in columnList" >
      <ColumnItem
        :key="index"
        :id="column.id"
        :name="column.name"
        :value="column.value"
        :commandList="column.commandList"
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
        columnList:[],
      }
    },
    mounted(){
      this.$events.on('changevalue',({id,value})=>{
        const columnItem = _.find(this.columnList,{id});
        columnItem.value = value;
        this.$events.emit('values',{values:this.columnList});
      });
      this.$events.on('selectedModeId',({id})=>{
        const columnList = _.find(this.$config.volumeModeList,{id});
        this.$editor.allVol = _.first(columnList.volumeList);
        this.columnList = columnList.volumeList[1];
        // console.log(this.columnList);
      })
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