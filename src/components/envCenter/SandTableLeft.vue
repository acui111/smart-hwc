<template>
  <div class="table-left">
    <div class="seat-item">
      <img
        src="/image/envImg/screen_home.png"
        ref="left-screen-home1"
        class="draggable"
        alt="主屏"
        />
      <img
        src="/image/envImg/screen_vice.png"
        ref="left-screen-vice1"
        class="draggable"
        alt="副屏"
        />
    </div>
    <div class="name">坐席19</div>
    <div class="seat-item draggable">
      <img
        src="/image/envImg/screen_home.png"
        ref="left-screen-home2"
        class="draggable"
        alt="主屏"
        />
      <img
        src="/image/envImg/screen_vice.png"
        ref="left-screen-vice2"
        class="draggable"
        alt="副屏"
        />
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
          const leftSeat = this.$editor.configs.seatList[1];
          const obj = _.first(leftSeat);
          const proxy = ev.target.cloneNode(true);
          proxy.style.position = "absolute";
          proxy.style.left = (ev.clientX - ev.target.offsetWidth / 2) + "px";
          proxy.style.top = (ev.clientY - ev.target.offsetHeight / 2) + "px";
          proxy.style.width = ev.target.offsetWidth + "px";
          proxy.style.height = ev.target.offsetHeight + "px";
          proxy.style.touchAction = 'none';
          proxy.setAttribute("id",this.id);
          proxy.setAttribute('commandList',_.first(obj.commandList));
          document.body.appendChild(proxy);
          proxy.setAttribute("proxy",true);
          ev.interaction.start(
            {name: 'drag'},
            ev.interactable,
            proxy
          );
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
          const leftSeat = this.$editor.configs.seatList[1];
          const obj = _.first(leftSeat);
          const proxy = ev.target.cloneNode(true);
          proxy.style.position = "absolute";
          proxy.style.left = (ev.clientX - ev.target.offsetWidth / 2) + "px";
          proxy.style.top = (ev.clientY - ev.target.offsetHeight / 2) + "px";
          proxy.style.width = ev.target.offsetWidth + "px";
          proxy.style.height = ev.target.offsetHeight + "px";
          proxy.style.touchAction = 'none';
          proxy.setAttribute("id",this.id);
          proxy.setAttribute('commandList',obj.commandList[1]);
          document.body.appendChild(proxy);
          proxy.setAttribute("proxy",true);
          ev.interaction.start(
            {name: 'drag'},
            ev.interactable,
            proxy
          );
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
          const leftSeat = this.$editor.configs.seatList[1];
          const obj = _.first(leftSeat);
          const proxy = ev.target.cloneNode(true);
          proxy.style.position = "absolute";
          proxy.style.left = (ev.clientX - ev.target.offsetWidth / 2) + "px";
          proxy.style.top = (ev.clientY - ev.target.offsetHeight / 2) + "px";
          proxy.style.width = ev.target.offsetWidth + "px";
          proxy.style.height = ev.target.offsetHeight + "px";
          proxy.style.touchAction = 'none';
          proxy.setAttribute("id",this.id);
          proxy.setAttribute('commandList',_.first(leftSeat[1].commandList));
          document.body.appendChild(proxy);
          proxy.setAttribute("proxy",true);
          ev.interaction.start(
            {name: 'drag'},
            ev.interactable,
            proxy
          );
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
          const leftSeat = this.$editor.configs.seatList[1];
          const proxy = ev.target.cloneNode(true);
          proxy.style.position = "absolute";
          proxy.style.left = (ev.clientX - ev.target.offsetWidth / 2) + "px";
          proxy.style.top = (ev.clientY - ev.target.offsetHeight / 2) + "px";
          proxy.style.width = ev.target.offsetWidth + "px";
          proxy.style.height = ev.target.offsetHeight + "px";
          proxy.style.touchAction = 'none';
          proxy.setAttribute("id",this.id);
          proxy.setAttribute('commandList',leftSeat[1].commandList[1]);
          document.body.appendChild(proxy);
          proxy.setAttribute("proxy",true);
          ev.interaction.start(
            {name: 'drag'},
            ev.interactable,
            proxy
          );
        }
      })
      .on("down", (ev)=>{})
      .on("up", (ev)=>{});
    }
  }
</script>
  
<style scoped>
  .table-left{
    width: 100px;
    height: 86px;
    display: flex;
    flex-direction:column;
    position: absolute;
    text-align: center;
    left: 30%;
    top: 32%;
    margin-left: -50px;
    margin-top: -48px;
  }
  .table-left .name{
    color:#fff;
    width: 92px;
    height: 20px;
    display: inline-block;
  }
  .seat-item{
    width:100px;
    height:36px;
    line-height: 36px;
    display:flex;
    justify-content:space-around;
  }
  .seat-item img{
    width: 50px;
    height: 36px;
    touch-action: none;
  }
</style>