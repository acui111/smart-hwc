<template>
  <div 
    ref="layout-mode-item"
    :style="style"
    >

  </div>
</template>
  
<script type="text/ecmascript-6">
  import interact from 'interactjs';
  export default {
    props:['id','left','top','width','height','layoutId','screenListId'],
    data(){
      return{
        style:{
          left: (this.left/65536) *420 + 'px',
          top: (this.top/65536)* 110+ 'px',
          width: (this.width/65536)*420 + 'px',
          height: (this.height/65536)*110 + 'px',
          position: 'absolute',
          border:'1px solid #666',
        }
      }
    },
    mounted(){
      // 接收拖拽
      interact(this.$refs['layout-mode-item']).dropzone({
        accept: ".draggable",
        ondropactivate: (ev) => {
          
        },

        ondragenter: (ev) => {
          this.style.border = '2px solid #fff';
        },

        ondragleave: (ev) => {
          this.style.border = '1px solid #666';
        },

        ondrop: (ev) => {
          const relatedTarget = ev.relatedTarget;
          const left = this.left;
          const top = this.top;
          const width = this.width;
          const height = this.height;
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
          this.style.border = '1px solid #666';
        },
      });
    }
  }
</script>
  
<style scoped>
  
</style>