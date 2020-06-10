<template>
  <div id="project">
    <Left/>
    <Center/>
    <Right/>
  </div>
</template>
  
<script type="text/ecmascript-6">
  import Left from '../components/left/Left';
  import Center from '../components/volCenter/Center';
  import Right from '../components/right/Right';
  export default {
    name:'Project',
    components:{
      Left,
      Center,
      Right
    }
  }
</script>
  
<style scoped>
  #project{
    width: 100%;
    height: 100%;
    display: flex;
    background-image: url(/image/bj.png);
    background-size: cover;
  }
</style>