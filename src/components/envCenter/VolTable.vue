<template>
  <div class="play">
    <div>
      <div class="seat-item draggable">
        <div ref="vol-screen-home1">主屏</div>
        <div ref="vol-screen-vice1">副屏</div>
      </div>
      <div class="name">导播1</div>
    </div>
    <div>
      <div class="seat-item draggable">
        <div ref="vol-screen-home2">主屏</div>
        <div ref="vol-screen-vice2">副屏</div>
      </div>
      <div class="name">导播2</div>
    </div>
    <img style="width:33px;height:44px;margin:6px 0 0 70px" src="/image/envImg/icon10.png" alt="导播灯">
  </div>
</template>
  
<script type="text/ecmascript-6">
  import interact from 'interactjs';
  export default {
    mounted(){
      // 沙盘导播坐席(1)的主屏拖拽
      interact(this.$refs["vol-screen-home1"])
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
          const leftSeat = this.$config.seatList[4];
          const obj = _.first(leftSeat);
          const first = _.first(obj.commandList);
          console.log('开始托拽主屏',first);
        }
      })
      .on("down", (ev)=>{})
      .on("up", (ev)=>{});

      // 沙盘导播坐席(1)的副屏拖拽
      interact(this.$refs["vol-screen-vice1"])
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
          const leftSeat = this.$config.seatList[4];
          const obj = _.first(leftSeat);
          const second = obj.commandList[1];
          console.log('开始托拽副屏',second);
        }
      })
      .on("down", (ev)=>{})
      .on("up", (ev)=>{});

      // 沙盘导播坐席(2)的主屏拖拽
      interact(this.$refs["vol-screen-home2"])
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
          const leftSeat = this.$config.seatList[4];
          const first = _.first(leftSeat[1].commandList);
          console.log('开始托拽主屏',first);
        }
      })
      .on("down", (ev)=>{})
      .on("up", (ev)=>{});

      // 沙盘导播坐席(2)的副屏拖拽
      interact(this.$refs["vol-screen-vice2"])
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
          const leftSeat = this.$config.seatList[4];
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
  /* 导播 */
  .play{
    width: 400px;
    height: 50px;
    position:absolute;
    left: 56%;
    bottom: 6%;
    margin-top: -25px;
    margin-left: -200px;
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
  .play .name{
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