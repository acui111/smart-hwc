<template>
  <div id="equipments-center">
    <!-- 中间全部坐席 -->
    <div id="table-list">
      <template v-for="(seatItem,index) in seatList">
        <TableItem
          :key="index"
          :name="seatItem.name"
          :id="seatItem.id"
          :commandList="seatItem.commandList"
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
        seatList:[],
      }
    },
    mounted(){
      this.$http.get('/api/configs')
      .then(response=>{
        const result = response.data;
        this.seatList = _.first(result.data.seatList);
      })
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