<template>
  <div class="table-right">
    <div class="seat-item draggable">
      <img
        src="/image/envImg/screen_home.png"
        ref="right-screen-home1"
        class="draggable"
        alt="主屏"
        />
      <img
        src="/image/envImg/screen_vice.png"
        ref="right-screen-vice1"
        class="draggable"
        alt="副屏"
        />
    </div>
    <div class="name">{{topName}}</div>
    <div class="seat-item draggable">
      <img
        src="/image/envImg/screen_home.png"
        ref="right-screen-home2"
        class="draggable"
        alt="主屏"
        />
      <img
        src="/image/envImg/screen_vice.png"
        ref="right-screen-vice2"
        class="draggable"
        alt="副屏"
        />
    </div>
    <div class="name">{{downName}}</div>
  </div>
</template>
  
<script type="text/ecmascript-6">
  import interact from 'interactjs';
  export default {
    data(){
      return{
        topName:'',
        downName:''
      }
    },
    mounted(){
      this.$http.get('/api/configs')
      .then(response=>{
        const result = response.data;
        this.topName = _.first(result.data.seatList[2]).name;
      this.downName = result.data.seatList[2][1].name;
      })
      // 沙盘右坐席(1)的主屏拖拽
      interact(this.$refs["right-screen-home1"])
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
          const rightSeat = this.$editor.configs.seatList[2];
          const obj = _.first(rightSeat);
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

      // 沙盘右坐席(1)的副屏拖拽
      interact(this.$refs["right-screen-vice1"])
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
          const leftSeat = this.$editor.configs.seatList[2];
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

      // 沙盘右坐席(2)的主屏拖拽
      interact(this.$refs["right-screen-home2"])
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
          const leftSeat = this.$editor.configs.seatList[2];
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

      // 沙盘右坐席(2)的副屏拖拽
      interact(this.$refs["right-screen-vice2"])
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
          const leftSeat = this.$editor.configs.seatList[2];
          const second = leftSeat[1].commandList[1];
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
  .table-right{
    width: 100px;
    height: 86px;
    display: flex;
    flex-direction:column;
    position: absolute;
    left: 70%;
    top: 32%;
    margin-left: -50px;
    margin-top: -48px;
    text-align: center;
  }
  .table-right .name{
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