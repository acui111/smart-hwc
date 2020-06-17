<template>
  <div class="rear-camera">
    <img 
      style="width:50px;height:48px" 
      src="/image/envImg/icon9.png" 
      alt="后摄像头" 
      @click="switchCamera"
      ref="after-camera"
      class="draggable"
      >
  </div>
</template>
  
<script type="text/ecmascript-6">
  import interact from 'interactjs';
  export default {
    methods:{
      switchCamera(){
        this.$editor.camera = this.$editor.configs.ipCameraList[1];
        const commandList = _.first(this.$editor.camera.commandList);
        this.$http.post('/api/controls',{
          "type": "IPC",
          "action": "SELECT",
          "orders": [commandList]
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
      }
    },
    mounted(){
      interact(this.$refs["after-camera"])
      .draggable({
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: "parent",
            endOnly: false
          })
        ],
        onstart: ev => {},

        onmove: ev => {
          if (!ev.target.getAttribute('proxy')) {
            return;
          }
          const proxy = ev.target;
          const x = (parseFloat(proxy.getAttribute('data-x')) || 0) + ev.dx;
          const y = (parseFloat(proxy.getAttribute('data-y')) || 0) + ev.dy;

          proxy.style.transform =
              'translate(' + x + 'px, ' + y + 'px)';

          proxy.setAttribute('data-x', x);
          proxy.setAttribute('data-y', y);
        },

        onend: ev => {
          if (ev.target.getAttribute('proxy')) {
            ev.target.remove();
          };
        }
      })
      .on("move", (ev) => {
        if (ev.interaction.pointerIsDown && !ev.interaction.interacting()) {
          const proxy = ev.target.cloneNode(true);
          proxy.style.position = "absolute";
          proxy.style.left = (ev.clientX - ev.target.offsetWidth / 2) + "px";
          proxy.style.top = (ev.clientY - ev.target.offsetHeight / 2) + "px";
          proxy.style.width = ev.target.offsetWidth + "px";
          proxy.style.height = ev.target.offsetHeight + "px";
          proxy.style.touchAction = 'none';
          proxy.setAttribute("id",this.id);
          proxy.setAttribute('commandList',this.$editor.configs.ipCameraList[1].commandList[1]);
          document.body.appendChild(proxy);
          proxy.setAttribute("proxy",true);
          ev.interaction.start({name: 'drag'},
            ev.interactable,
            proxy);
        }
      })
      .on("down", (ev)=>{

      })
      .on("up", (ev)=>{
        
      });
    }
  }
</script>
  
<style scoped>
  
</style>