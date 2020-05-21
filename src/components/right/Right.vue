<template>
  <div id="right">
    <TotalList/>
    <Camera/>
  </div>
</template>
  
<script type="text/ecmascript-6">
  import TotalList from './TotalList';
  import Camera from './Camera';
  export default {
    components:{
      TotalList,
      Camera
    }
  }
</script>
  
<style scoped>
  #right{
    width: 22%;
    height: 100%;
  }
</style>