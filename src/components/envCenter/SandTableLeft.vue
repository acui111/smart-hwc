<template>
  <div class="table-left">
    <div class="seat-item draggable">
      <div ref="left-screen-home1">主屏</div>
      <div ref="left-screen-vice1">副屏</div>
    </div>
    <div class="name">坐席19</div>
    <div class="seat-item draggable">
      <div ref="left-screen-home2">主屏</div>
      <div ref="left-screen-vice2">副屏</div>
    </div>
    <div class="name">坐席20</div>
  </div>
</template>
  
<script type="text/ecmascript-6">
  import interact from 'interactjs';
  export default {
    mounted(){
      // 沙盘左坐席(1)的主屏拖拽
      interact(this.$refs["left-screen-home1"])
      .draggable({
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: "parent",
            endOnly: false
          })
        ],
        onstart: ev => {
        },

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
          const leftSeat = this.$config.seatList[1];
          const obj = _.first(leftSeat);
          const first = _.first(obj.commandList);
          console.log('开始托拽主屏',first);
        }
      })
      .on("down", (ev)=>{})
      .on("up", (ev)=>{});

      // 沙盘左坐席(1)的副屏拖拽
      interact(this.$refs["left-screen-vice1"])
      .draggable({
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: "parent",
            endOnly: false
          })
        ],
        onstart: ev => {
        },

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
          const leftSeat = this.$config.seatList[1];
          const obj = _.first(leftSeat);
          const second = obj.commandList[1];
          console.log('开始托拽副屏',second);
        }
      })
      .on("down", (ev)=>{})
      .on("up", (ev)=>{});

      // 沙盘左坐席(2)的主屏拖拽
      interact(this.$refs["left-screen-home2"])
      .draggable({
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: "parent",
            endOnly: false
          })
        ],
        onstart: ev => {
        },

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
          const leftSeat = this.$config.seatList[1];
          const first = _.first(leftSeat[1].commandList);
          console.log('开始托拽主屏',first);
        }
      })
      .on("down", (ev)=>{})
      .on("up", (ev)=>{});

      // 沙盘左坐席(2)的副屏拖拽
      interact(this.$refs["left-screen-vice2"])
      .draggable({
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: "parent",
            endOnly: false
          })
        ],
        onstart: ev => {
        },

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
          const leftSeat = this.$config.seatList[1];
          const second = leftSeat[1].commandList[1];
          console.log('开始托拽副屏',second);
        }
      })
      .on("down", (ev)=>{})
      .on("up", (ev)=>{});
    }
  }
</script>
  
<style scoped>
  .table-left{
    width: 92px;
    height: 86px;
    display: flex;
    flex-direction:column;
    position: absolute;
    text-align: center;
    left: 30%;
    top: 32%;
    margin-left: -46px;
    margin-top: -48px;
  }
  .table-left .name{
    color:#fff;
    width: 92px;
    height: 20px;
    display: inline-block;
  }
  .seat-item{
    width:92px;
    height:36px;
    line-height: 36px;
    display:flex;
    justify-content:space-around;
    background:linear-gradient(180deg,rgba(123,241,248,1),rgba(61,239,255,1));
    opacity:0.7;
    border-radius:2px;
  }
  .seat-item div{
    width: 50%;
    height: 100%;
    text-align: center;
    border: 0.5px solid #666;
    touch-action: none;
  }
</style>