<template>
  <div class="leader">
    <div>
      <div class="seat-item draggable">
        <div ref="leader-screen-home1">主屏</div>
        <div ref="leader-screen-vice1">副屏</div>
      </div>
      <div class="name">领导1</div>
    </div>
    <div>
      <div class="seat-item draggable">
        <div ref="leader-screen-home2">主屏</div>
        <div ref="leader-screen-vice2">副屏</div>
      </div>
      <div class="name">领导2</div>
    </div>
  </div>
</template>
  
<script type="text/ecmascript-6">
  import interact from 'interactjs';
  export default {
    mounted(){
      // 沙盘领导坐席(1)的主屏拖拽
      interact(this.$refs["leader-screen-home1"])
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
          const leftSeat = this.$config.seatList[3];
          const obj = _.first(leftSeat);
          const first = _.first(obj.commandList);
          console.log('开始托拽主屏',first);
        }
      })
      .on("down", (ev)=>{})
      .on("up", (ev)=>{});

      // 沙盘领导坐席(1)的副屏拖拽
      interact(this.$refs["leader-screen-vice1"])
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
          const leftSeat = this.$config.seatList[3];
          const obj = _.first(leftSeat);
          const second = obj.commandList[1];
          console.log('开始托拽副屏',second);
        }
      })
      .on("down", (ev)=>{})
      .on("up", (ev)=>{});

      // 沙盘领导坐席(2)的主屏拖拽
      interact(this.$refs["leader-screen-home2"])
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
          const leftSeat = this.$config.seatList[3];
          const first = _.first(leftSeat[1].commandList);
          console.log('开始托拽主屏',first);
        }
      })
      .on("down", (ev)=>{})
      .on("up", (ev)=>{});

      // 沙盘领导坐席(2)的副屏拖拽
      interact(this.$refs["leader-screen-vice2"])
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
          const leftSeat = this.$config.seatList[3];
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
  .leader{
    width: 211px;
    height: 36px;
    position: absolute;
    display: flex;
    justify-content: space-around;
    left: 50%;
    top: 64%;
    margin-left: -105px;
    margin-top: -18px;
    text-align: center;
  }
  .leader .name{
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