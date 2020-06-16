<template>
  <!-- 修改名称 -->
  <div id="edit-modal">
    <a-modal
      :visible="editModeVisible"
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
        >修改名称</p>
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
          >修改为：</p>
          <a-input 
            style="width: 260px;
              background:rgba(27,116,125,1);
              border:1px solid rgba(0,245,255,1);
              border-radius:2px;
              font-size:18px;
              font-family:SimHei;
              color:#fff" 
            v-model="modeName" 
            />
        </div>
      </div>
      <!-- 对话框底部按钮 -->
      <div style="width:100%;height:40px;position:absolute;right:0;bottom:0">
        <div style="position:absolute;right:0;bottom:0;margin-bottom:8px">
          <img 
            src="/image/button-save.png" 
            @click="saveModeName" 
            width="64" height="24"
          >
          <img 
            src="/image/button-cancel.png" 
            @click="cancelModeName" 
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
        editModeVisible:false,
        // 模式名
        modeName:"",
        //id
        modeId:null,
      }
    },
    methods: {
      // 右上角取消
      cancel(){
        this.editModeVisible = false;
      },
      // 保存修改
      saveModeName(){
        const volumeModeList = _.map(this.$editor.configs.volumeModeList,(volumeMode)=>{
          if (volumeMode.id == this.modeId) {
            volumeMode.name = this.modeName;
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
        this.editModeVisible = false;
      },
      // 取消修改
      cancelModeName(){
        this.editModeVisible = false;
      }
    },
    mounted(){
      this.$events.on('editModeName',({state,id,name})=>{
        this.editModeVisible = state;
        this.modeName = name;
        this.modeId = id;
      })
    }
  }
</script>
  
<style scoped>
  
</style>