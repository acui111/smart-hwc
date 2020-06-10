<template>
  <!-- 另存为 -->
  <div id="saveMode">
    <a-modal
      :visible="modeSaveVisible"
      :closable=false
      :centered=true
      :footer="null"
      width="396px"
      :bodyStyle="{'width':'396px','padding':'0','height':'187px','background':'rgba(27,116,125,1)','border':'1px solid rgba(27,116,125,1)','border-radius':'4px','position':'relative'}"
        >
      <!-- 对话框头部 -->
      <div style="width:100%;height:35px;line-height:35px;border-bottom:1px solid #18A9B8;display:flex;justify-content: space-between">
        <p
          style="
            font-size:18px;
            font-family:SimHei;
            color:#fff;
            margin-left:12px
            "
        >另存为</p>
        <img
          @click="cancel"
          style="width:16px;height:16px;margin-right:12px;margin-top:8px" 
          src="/image/icon_close.png" 
          alt="叉号"
          >
      </div>
      <div style="margin:0px 30px;position:relactive">
        <div style="position:absolute;top:50%;display:flex">
          <p style="
            margin:0;
            margin-bottom:7px;
            font-size:18px;
            font-family:SimHei;
            color:#fff;
            "
          >模式名称：</p>
          <!-- 选择模式框 -->
          <div class="select-mode">
            <div class="input">
              <input v-model="value" readonly unselectable="on">
              <img src="/image/icon_down.png" alt="箭头"  @click="openSelect">
            </div>
            <div class="mode-list" v-show="show">
              <ul>
                <li @click="selectMode(modeItem,index)" v-for="(modeItem,index) in modeList" :key="modeItem.index">
                  <div :class="{active:isActive == index}">
                    {{ modeItem.name }}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- 对话框底部按钮 -->
      <div style="width:100%;height:40px;position:absolute;right:0;bottom:0">
        <div style="position:absolute;right:0;bottom:0;margin-bottom:8px">
          <img 
            src="/image/button-save.png" 
            @click="saveMode" 
            width="64" height="24"
          >
          <img 
            src="/image/button-cancel.png" 
            @click="cancelMode" 
            width="64" height="24" 
            style="margin-left:21px;margin-right:8px"
          >
        </div>
      </div> 
    </a-modal>
  </div>
</template>
  
<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        modeSaveVisible:false,
        // 所有的音量列表
        vols:[],
        //下拉选择框的显示与隐藏
        show:false,
        value:'模式1',
        // 所有可选择的模式
        modeList:[
          {
            id:1,
            name:'模式1'
          },
          {
            id:2,
            name:'模式2'
          },
          {
            id:3,
            name:'模式3'
          },
          {
            id:4,
            name:'模式4'
          },
          {
            id:5,
            name:'模式5'
          }
        ],
        isActive:0,
      }
    },
    methods: {
      // 展开选择框
      openSelect(){
        this.show = !this.show;
      },
      // 选择模式
      selectMode(modeItem,index){
        this.value = modeItem.name;
        this.isActive = index;
        this.show = false;
      },
      // 保存模式
      saveMode(){
        // console.log('所有的音量列表',this.vols);
        this.modeSaveVisible = false;
      },
      //取消模式
      cancelMode(){
        this.modeSaveVisible = false;
      },
      //右上角叉号取消
      cancel(){
        this.modeSaveVisible = false;
      },
    },
    mounted(){
      // 显示另存为的对话框
      this.$events.on('saveMode',({state})=>{
        this.modeSaveVisible = state;
      });
      // 接收当前模式的所有音量列表
      this.$events.on('vols',({vols})=>{
        this.vols = vols ;
      })
    }
  }
</script>
  
<style scoped>
  .select-mode{
    width: 260px;
    height: 30px;
    background:rgba(27,116,125,1);
    border:1px solid rgba(0,245,255,1);
    border-radius:2px;
  }
  .input input{
    width: 100%;
    height: 28px;
    background:rgba(27,116,125,1);
    outline: none;
    text-align: center;
    line-height: 30px;
    color:#fff;
    font-size:18px;
    font-family:SimHei;
    position: relative;
  }
  .input img{
    position: absolute;
    top: 45%;
    right:10%;
    margin-top:-3px;
    margin-right:-5px;
  }
  .mode-list{
    width: 259px;
    height: 200px;
    background:rgba(27,116,125,1);
    border:1px solid rgba(0,245,255,1);
    position: relative;
    z-index: 10;
    /* overflow-y: auto; */
  }
  .mode-list ul li{
    width: 100%;
    height: 40px;
    cursor: pointer;
    text-align: center;
    line-height: 40px;
    color:#fff;
    font-size:18px;
    font-family:SimHei;
  }
  .mode-list ul li:hover{
    background-color: #1598a5;
  }
  .active{
    color: #00F5FF;
  }
</style>