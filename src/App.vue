<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
    this.$http.get('/api/configs')
    .then(response=>{
      const result = response.data;
      this.$editor.configs = result.data;
    })
    .catch(error=>{
      console.log('请求失败');
    })
  }
}
</script>

<style>
  #app{
    width: 100%;
    height: 100%;
    user-select: none;
  }
</style>
