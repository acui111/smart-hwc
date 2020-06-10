<template>
  <!-- 每一项坐席 -->
  <div :class="sstt[index]" id="table-item">
    <img style="width:92px;height:36px" :src="`/image/envImg/table${num}.png`" alt="每一项坐席">
  </div>
</template>
  
<script type="text/ecmascript-6">
  export default {
    props:['num','index'],
    data(){
      return{
        sstt: [
          "ss1",
          "ss2",
          "ss3",
          "ss4",
          "ss5",
          "ss6",
          "ss7",
          "ss8",
          "ss9",
          "ss10",
          "ss11",
          "ss12",
          "ss13",
          "ss14",
          "ss15",
          "ss16",
        ]
      }
    }
  }
</script>
  
<style scoped>
  #table-item{
    margin-left: 23px;
  }
  .ss3,.ss9,.ss15{
    margin-right: calc(100% - 780px);
  }
</style>