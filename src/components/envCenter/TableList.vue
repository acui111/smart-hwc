<template>
  <div id="equipments-center">
    <!-- 中间全部坐席 -->
    <div id="table-list">
      <template v-for="(tableItem,index) in tableList">
        <TableItem
          :key="index"
          :num="tableItem"
          :index="index"
          />
      </template>
    </div>
    <!-- 窗帘 -->
    <div class="curtain">
      <img style="width:31px;height:53px" src="/image/envImg/icon11.png" alt="窗帘1">
      <img style="width:31px;height:53px" src="/image/envImg/icon12.png" alt="窗帘2">
    </div>
  </div>
</template>
  
<script type="text/ecmascript-6">
  import TableItem from './TableItem'
  export default {
    components:{
      TableItem
    },
    data(){
      return{
        tableList:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
      }
    }
  }
</script>
  
<style scoped>
  #equipments-center{
    width: 100%;
    height: 246px;
    position: relative;
  }
  #table-list{
    width: calc(100% - 255px);
    height: 246px;
    margin: 60px 135px 0 120px;
    display: flex;
    justify-content: space-around;
    flex-wrap:wrap;
  }
  .curtain{
    width: 31px;
    height: 370px;
    display: flex;
    flex-direction: column;
    position:absolute;
    left: 0;
    top: -10%;
    margin-left: 30px;
    justify-content: space-between;
  }
</style>