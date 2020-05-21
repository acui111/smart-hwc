<template>
  <div id="left">
    <FixedMode/>
    <CustomMode/>
  </div>
</template>
  
<script type="text/ecmascript-6">
  import FixedMode from './FixedMode';
  import CustomMode from './CustomMode'
  export default {
    components:{
      FixedMode,
      CustomMode
    }
  }
</script>
  
<style scoped>
  #left{
    width: 22%;
    height: 100%;
  }
</style>