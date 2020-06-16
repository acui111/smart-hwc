<template>
  <div id="column-list">
    <!-- 坐席 -->
    <template v-for="(column,index) in this.$editor.columnList" >
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
        data:[],
      }
    },
    mounted(){
      this.$http.get('/api/configs')
      .then(response=>{
        const result = response.data;
        this.data = result.data;
      })


      this.$events.on('changeVol',({id,vol})=>{
        const columnItem = _.find(this.$editor.columnList,{id});
        columnItem.value = vol;
      });


      this.$events.on('selectedModeId',({id})=>{
        const columnList = _.find(this.data.volumeModeList,{id});
        this.$editor.allVol = _.first(columnList.volumeList);
        this.$editor.columnList = columnList.volumeList[1];
      })





      this.$http.post('/api/controls',{
        "type": "VOLUME",
        "action": "GET",
        "orders": []
      })
      .then(response=>{
        
      })
      .catch(error=>{
        this.$message.error(error.response.data.message);
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