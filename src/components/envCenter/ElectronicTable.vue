<template>
  <!-- 电子沙盘 -->
  <div 
    class="sand-table"
    ref="sand-table"
    >
    <img style="width:172px;height:111px" src="/image/envImg/sand_table.png" alt="电子沙盘">
  </div>
</template>
  
<script type="text/ecmascript-6">
import interact from 'interactjs';
  export default {
    data(){
      return{
        screenListId:null,
      }
    },
    mounted(){
      // 接收拖拽
      interact(this.$refs['sand-table']).dropzone({
        accept: ".draggable",
        ondropactivate: (ev) => {
          
        },

        ondragenter: (ev) => {
          this.$refs['sand-table'].style.border = '2px solid #fff';
        },

        ondragleave: (ev) => {
          this.$refs['sand-table'].style.border = 'none';
        },

        ondrop: (ev) => {
          const currentTarget = ev.currentTarget;
          const relatedTarget = ev.relatedTarget;
          const left = 65536;
          const top = 65536;
          const width = 65536;
          const height = 65536;
          const commandList = ev.relatedTarget.getAttribute("commandList");
          let compiled = _.template(commandList);
          this.compiled =  compiled({
            left: left,
            top: top,
            width: width,
            height: height,
            screenId:this.screenListId,
          });
          console.log(this.compiled);
          this.$http.post('/api/controls',{
            "type": "DISPLAY",
            "action": "OPEN",
            "orders": [
              this.compiled
            ]
          })
          .then(response=>{
            const result = response.data;
            if (result.successful) {
              this.$message.success(result.message);
            }else{
              this.$message.error(result.message);
            }
          })
          .catch(error=>{
            this.$message.error(error.response.data.message);
          })
        },
        ondropdeactivate: (ev) => {
          this.$refs['sand-table'].style.border = 'none';
        },
      });
      // 获取配置
      this.$http.get('/api/configs')
      .then(response=>{
        const result = response.data;
        const screenList = result.data.screenList[1];
        this.screenListId = screenList.id;
      })
      .catch(error=>{
        this.$message.error(error.response.data.message);
      })
    }
  }
</script>
  
<style scoped>
  .sand-table{
    width: 176px;
    height: 115px;
    position:absolute;
    left: 50%;
    top: 32%;
    margin-left: -86px;
    margin-top: -55px;
  }
</style>