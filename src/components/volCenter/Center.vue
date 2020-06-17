<template>
  <div id="center">
    <!-- 音频/环境切换 -->
    <a-tabs
      :animated="false"
      class="title" 
      default-active-key="1" 
      @change="changeSrc"
      >
      <a-tab-pane key="1">
        <span slot="tab">
          <img v-if="environment == 0" src="/image/environment.png" alt="环境控制">
          <img v-else-if="environment == 1" src="/image/environment_s.png" alt="环境控制">
        </span>



        <div class="table-button">
          <img style="margin-left:16px" src="/image/envImg/open.png" alt="大屏开" @click="screenOpen">
          <img style="margin:0 20px 0 33px" src="/image/envImg/close.png" alt="大屏关" @click="screenClose">
        </div>

        <!-- 屏幕设备 -->
        <Equipments/>
        <!-- 全部坐席 -->
        <TableList/>
        <!-- 电子沙盘 -->
        <SandTable/>
      </a-tab-pane>
      <a-tab-pane key="2">
        <span slot="tab">
          <img v-if="audio == 0" src="/image/audio.png" alt="音量控制">
          <img v-else-if="audio == 1" src="/image/audio_s.png" alt="音量控制">
        </span>

        <div class="tab-button">
          <!-- 修改名称 -->
          <img @click="editModeName" class='edit-mode' src="/image/edit.png" alt="修改名称">
          <!-- 保存在本模式 -->
          <img @click="save" class='save-to-mode' src="/image/icon.png" alt="保存">
        </div>

        <!-- 选择模式 -->
        <ModeList/>
        <!-- 所有的音柱 -->
        <ColumnList/>
        <!-- 修改模板名称 -->
        <EditModal/>
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
import EditModal from './EditModal';
import _ from 'lodash';
  export default {
    name:'Center',
    components:{
      ModeList,
      ColumnList,
      Equipments,
      TableList,
      SandTable,
      EditModal
    },
    data(){
      return{
        // tab环境控制
        environment:1,
        // tab音频控制
        audio:0,
        // tab右侧按钮
        editButtonShow:0,
        // 模式名
        modeName:'',
        //模式的id
        modeId:0,
        volumeList:[],
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
      //保存模式
      save(){
        const volumeModeList = _.map(this.$editor.configs.volumeModeList,(volumeMode)=>{
          if (volumeMode.id == this.modeId) {
            volumeMode.volumeList[0] = this.$editor.allVol;
            volumeMode.volumeList[1] = this.$editor.columnList;
          }
          return volumeMode;
        })
        this.$editor.configs.volumeModeList = volumeModeList;
        this.$http.put('/api/configs',this.$editor.configs)
        .then(response=>{
          const result = response.data;
          if (!result.successful) {
            this.$message.error(result.message);
          }
        })
        .catch(error=>{
          this.$message.error(error.response.data.message);
        })
      },
      //修改名称
      editModeName(){
        // 修改id对应模式的名字
        this.$events.emit('editModeName',{state:true,id:this.modeId,name:this.modeName});
      },
      // 大屏开
      screenOpen(){
        const screenList = _.first(this.$editor.configs.screenList);
        const first = _.first(screenList.commandList);
        this.$http.post('/api/controls',{
          "type": "POWER",
          "action": "ON",
          "orders": [
            first
          ]
        })
        .then(response=>{
          const result = response.data;
          if (!result.successful) {
            this.$message.error(result.message);
          }
        })
        .catch(error=>{
          this.$message.error(error.response.data.message);
        })
      },
      // 大屏关
      screenClose(){
        let _this = this;
        _this.$confirm({
          title: '大屏即将关闭，是否继续',
          content: h => <div style="color:red;">操作提示</div>,
          okText: '继续',
          okType: 'danger',
          cancelText: '取消',
          onOk() {
            _this.close();
          }
        })
      },
      close(){
        const screenList = _.first(this.$editor.configs.screenList);
        const second = screenList.commandList[1];
        this.$http.post('/api/controls',{
          "type": "POWER",
          "action": "OFF",
          "orders": [
            second
          ]
        })
        .then(response=>{
          const result = response.data;
          if (!result.successful) {
            this.$message.error(result.message);
          }
        })
        .catch(error=>{
          this.$message.error(error.response.data.message);
        })
      }
    },
    mounted(){
      // 接收切换模式的信息
      this.$events.on('editButtonShow',({state,id,name})=>{
        this.editButtonShow = state;
        this.modeId = id;
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