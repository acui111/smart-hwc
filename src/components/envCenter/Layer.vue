<template>
  <div 
    ref="layout-mode-item"
    :style="{
      left: (left/65536) *420 + 'px',
      top: (top/65536)* 110+ 'px',
      width: (width/65536)*420 + 'px',
      height: (height/65536)*110 + 'px',
      position: 'absolute',
      border:'1px solid #666',
    }"
    >

  </div>
</template>
  
<script type="text/ecmascript-6">
  import interact from 'interactjs';
  export default {
    props:['id','left','top','width','height','layoutId','screenListId'],
    mounted(){
      // 接收拖拽
      interact(this.$refs['layout-mode-item']).dropzone({
        accept: ".draggable",
        ondropactivate: (ev) => {
          
        },

        ondragenter: (ev) => {
          this.$refs['layout-mode-item'].style.border = '2px solid #fff';
        },

        ondragleave: (ev) => {
          this.$refs['layout-mode-item'].style.border = '1px solid #666';
        },

        ondrop: (ev) => {
          const currentTarget = ev.currentTarget;
          const relatedTarget = ev.relatedTarget;
          const left = (parseInt(currentTarget.style.left)/420)*65536;
          const top = (parseInt(currentTarget.style.top)/110)*65536;
          const width = (parseInt(currentTarget.style.width)/420)*65536;
          const height = (parseInt(currentTarget.style.height)/110)*65536;
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
            if (!result.successful) {
              this.$message.error(result.message);
            }
          })
          .catch(error=>{
            this.$message.error(error.response.data.message);
          })
        },
        ondropdeactivate: (ev) => {
          this.$refs['layout-mode-item'].style.border = '1px solid #666';
        },
      });
    }
  }
</script>
  
<style scoped>
  
</style>