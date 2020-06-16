export default function (Vue) {
  const editor = new Vue({
    data(){
      return{
        allVol:[],
        camera:{},
        columnList:[],
        configs:{},
      }
    }, 
  })
  
  Vue.mixin({
    created(){
      this.$editor = editor;
    }
  })
}