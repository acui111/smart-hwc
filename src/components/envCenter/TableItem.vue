<template>
  <!-- 每一项坐席 -->
  <div :class="sstt[id]" id="table-item">
    <div class="table-item draggable">
      <img
        src="/image/envImg/screen_home.png"
        ref="screen-home"
        alt="主屏"
        />
      <img
        src="/image/envImg/screen_vice.png"
        ref="screen-vice"
        alt="副屏"
        />
    </div>
    <div class="name">{{name}}</div>
  </div>
</template>
  
<script type="text/ecmascript-6">
  import interact from 'interactjs';
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
          }
        }
      })
      .on("move", (ev) => {
        if (ev.interaction.pointerIsDown && !ev.interaction.interacting()) {
          const first = _.first(this.commandList);
          console.log('开始托拽主屏',first);
        }
      })
      .on("down", (ev)=>{})
      .on("up", (ev)=>{});
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
          const second = this.commandList[1];
          console.log('开始托拽副屏',second);
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