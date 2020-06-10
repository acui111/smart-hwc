<template>
  <div id="center">
    <!-- 音频/环境切换 -->
    <a-tabs
      :animated="false"
      class="title" 
      default-active-key="2" 
      @change="changeSrc"
      >
      <a-tab-pane key="2">
        <span slot="tab">
          <img v-if="audio == 0" src="/image/audio.png" alt="音量控制">
          <img v-else-if="audio == 1" src="/image/audio_s.png" alt="音量控制">
        </span>

        <div class="tab-button" v-if="editButtonShow == 1">
          <!-- 修改名称 -->
          <img @click="editModeName" class='edit-mode' src="/image/edit.png" alt="修改名称">
          <!-- 保存在本模式 -->
          <img class='save-to-mode' src="/image/save_to_mode.png" alt="保存在本模式">
          <!-- 另存为 -->
          <img @click='save' class='save' src="/image/save.png" alt="另存为">
        </div>

        <div class="tab-button" v-else>
          <!-- 另存为 -->
          <img @click='save' class='save' src="/image/save.png" alt="另存为">
        </div>

        <!-- 选择模式 -->
        <ModeList/>
        <!-- 所有的音柱 -->
        <ColumnList/>
        <!-- 另存为 -->
        <SaveModal/>
        <!-- 修改模板名称 -->
        <EditModal/>
      </a-tab-pane>
      <a-tab-pane key="1">
        <span slot="tab">
          <img v-if="environment == 0" src="/image/environment.png" alt="环境控制">
          <img v-else-if="environment == 1" src="/image/environment_s.png" alt="环境控制">
        </span>



        <div class="table-button">
          <span>坐席：</span>
          <img style="margin-left:16px" src="/image/open.png" alt="全启">
          <img style="margin:0 20px 0 33px" src="/image/close.png" alt="全关">
        </div>



        <!-- 屏幕设备 -->
        <Equipments/>
        <!-- 全部坐席 -->
        <TableList/>
        <!-- 电子沙盘 -->
        <SandTable/>
      </a-tab-pane>
    </a-tabs>

  </div>
</template>
  
<script type="text/ecmascript-6">
import ModeList from './ModeList';
import ColumnList from './ColumnList';
import Equipments from '../envCenter/Equipments';
import TableList from '../envCenter/TableList';
import SandTable from '../envCenter/SandTable';
import SaveModal from './SaveModal';
import EditModal from './EditModal';
  export default {
    name:'Center',
    components:{
      ModeList,
      ColumnList,
      Equipments,
      TableList,
      SandTable,
      SaveModal,
      EditModal
    },
    data(){
      return{
        // tab环境控制
        environment:0,
        // tab音频控制
        audio:1,
        // tab右侧按钮
        editButtonShow:0,
        // 模式名
        modeName:'',
        //模式的id
        modeId:0,
      }
    },
    methods:{
      // 切换tab
      changeSrc(activeKey){
        if (activeKey == 1) {
          this.environment = 1;
          this.audio = 0;
        }else{
          this.environment = 0;
          this.audio = 1;
        }
      },
      //将模式另存为
      save(){
        // 显示另存为
        this.$events.emit('saveMode',{state:true});
      },
      //修改名称
      editModeName(){
        // 修改id对应模式的名字
        this.$events.emit('editModeName',{state:true,id:this.modeId,name:this.modeName});
      }
    },
    mounted(){
      // 接收是否展示(除另存为)的按钮
      this.$events.on('editButtonShow',({state,id,name})=>{
        this.editButtonShow = state;
        this.modeName = name;
      })
    }
  }
</script>
  
<style scoped>
  #center{
    width: 66%;
    height: calc(100% - 40px);
    background-image: url(/image/bj_center.png);
    background-size: 100% 100%;
    margin:20px 0 16px;
    position: relative;
  }
  #center .title{
    margin-top:10px;
  }
  .button{
    margin: 50px 50px 0 65px;
  }
  .tab-button{
    height: 24px;
    position:absolute;
    right: 0;
    top: 0;
    margin:10px 54px 0 0;
    display: flex;
    justify-content: space-between;
  }
  .tab-button img{
    height: 24px;
    margin-left:16px;
  }
  .table-button{
    position:absolute;
    right: 0;
    top: 0;
    margin-right:35px;
    margin-top: 10px;
  }
  .table-button span{
    font-size:16px;
    font-family:SimHei;
    color:rgba(229,248,255,1);
  }
  .table-button img{
    width: 73px;
    height: 24px;
  }
  /* 改变tab的样式 */
  /deep/ .ant-tabs-nav .ant-tabs-tab{
    margin:0 0 0 30px;
  }
  /* 去除tab的底线 */
  /deep/ .ant-tabs-bar{
    border-bottom: 0px;
  }
  /* 去除active */
  /deep/ .ant-tabs-ink-bar{
    height: 0;
  }
</style>