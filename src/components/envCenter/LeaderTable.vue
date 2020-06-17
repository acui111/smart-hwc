<template>
  <div class="leader">
    <div>
      <div class="seat-item draggable">
        <img
        src="/image/envImg/screen_home.png"
        ref="leader-screen-home1"
        class="draggable"
        alt="主屏"
        />
      <img
        src="/image/envImg/screen_vice.png"
        ref="leader-screen-vice1"
        class="draggable"
        alt="副屏"
        />
    </div>
    <div class="name">{{leftName}}</div>
    </div>
    <div>
      <div class="seat-item draggable">
        <img
        src="/image/envImg/screen_home.png"
        ref="leader-screen-home2"
        class="draggable"
        alt="主屏"
        />
      <img
        src="/image/envImg/screen_vice.png"
        ref="leader-screen-vice2"
        class="draggable"
        alt="副屏"
        />
    </div>
    <div class="name">{{rightName}}</div>
    </div>
  </div>
</template>
  
<script type="text/ecmascript-6">
  import interact from 'interactjs';
  export default {
    data(){
      return{
        leftName:"",
        rightName:'',
      }
    },
    mounted(){
      this.$http.get('/api/configs')
      .then(response=>{
        const result = response.data;
        this.leftName = _.first(result.data.seatList[3]).name;
        this.rightName = result.data.seatList[3][1].name;
      })
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
          const leftSeat = this.$editor.configs.seatList[3];
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
          const leftSeat = this.$editor.configs.seatList[3];
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
          const leftSeat = this.$editor.configs.seatList[3];
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
          const leftSeat = this.$editor.configs.seatList[3];
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
    cursor: pointer !important;
  }
</style>