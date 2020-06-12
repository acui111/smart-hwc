export default function (Vue) {
  const editor = new Vue({
    data(){
      return{
        allVol:[],
        camera:{},
      }
    }, 
  })
  
  Vue.mixin({
    created(){
      this.$editor = editor;
    }
  })
}