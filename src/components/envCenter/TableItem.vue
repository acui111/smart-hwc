<template>
  <!-- 每一项坐席 -->
  <div :class="sstt[id]" id="table-item">
    <div class="table-item" ref="table-item">
      <img
        src="/image/envImg/screen_home.png"
        ref="screen-home"
        class="screen-home draggable"
        alt="主屏"
        />
      <img
        src="/image/envImg/screen_vice.png"
        ref="screen-vice"
        class="screen-vice draggable"
        alt="副屏"
        />
    </div>
    <div class="name">{{name}}</div>
  </div>
</template>
  
<script type="text/ecmascript-6">
  import interact from 'interactjs';
  import _ from 'lodash';
  export default {
    props:['id','name','commandList'],
    data(){
      return{
        sstt: [
          "ss1",
          "ss2",
          "ss3",
          "ss4",
          "ss5",
          "ss6",
          "ss7",
          "ss8",
          "ss9",
          "ss10",
          "ss11",
          "ss12",
          "ss13",
          "ss14",
          "ss15",
          "ss16",
        ]
      }
    },
    mounted(){
      //单个主屏拖拽
      interact(this.$refs["screen-home"])
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
            proxy.setAttribute('commandList',_.first(this.commandList));
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

      // 单个副屏托拽
      interact(this.$refs["screen-vice"])
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
            }
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
            proxy.setAttribute('commandList',this.commandList[1]);
            document.body.appendChild(proxy);
            proxy.setAttribute("proxy",true);
            ev.interaction.start({name: 'drag'},
              ev.interactable,
              proxy);
          }
        })
        .on("down", (ev)=>{})
        .on("up", (ev)=>{});
    },
  }
</script>
  
<style scoped>
  #table-item{
    margin-left: 23px;
    text-align: center;
  }
  #table-item .name{
    color:#fff;
  }
  .table-item img{
    width: 50px;
    height: 36px;
    touch-action: none;
  }
  .ss4,.ss10,.ss16{
    margin-right: calc(100% - 780px);
  }
</style>