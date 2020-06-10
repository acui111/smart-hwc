<template>
  <!-- 自定义预案 -->
  <div id="custom">
    <div class="custom-list">
      <template v-for="(customItem,index) in columnList">
        <div
          id="custom-item" 
          @click="selectMode(customItem.id)"
          @mouseenter="enter(customItem.id)"
          @mouseleave="leave"
          :class="{active:customItem.id == isActive}"
          >
          <!-- 默认 -->
          <img style="width:73px;height:73px" :src="customItem.id == isActive? Src: src" alt="模式">
          <div class="name">{{customItem.name}}</div>
          <div class='edit' v-if="customItem.id == EditActive">

            <!-- 默认编辑 -->
            <img v-if="editState == 0" src="/image/icon_edit.png" alt="编辑预案" @mouseenter="editMouseEnter" @mouseleave="editMouseLeave">
            <!-- 鼠标移入编辑 -->
            <img v-else-if="editState == 1" src="/image/icon_edit_s.png" alt="编辑预案" @mouseenter="editMouseEnter" @mouseleave="editMouseLeave">

            <!-- 默认删除 -->
            <img v-if="delState == 0" src="/image/icon_del.png" alt="删除预案" @mouseenter="delMouseEnter" @mouseleave="delMouseLeave">
            <!-- 鼠标移入删除 -->
            <img v-else-if="delState == 1" src="/image/icon_del_s.png" alt="删除预案" @mouseenter="delMouseEnter" @mouseleave="delMouseLeave">
            
            <!-- 默认重命名 -->
            <img v-if="reState == 0" src="/image/icon_re.png" alt="重命名预案" @mouseenter="reMouseEnter" @mouseleave="reMouseLeave">
            <!-- 鼠标移入重命名 -->
            <img v-else-if="reState == 1" src="/image/icon_re_s.png" alt="重命名预案" @mouseenter="reMouseEnter" @mouseleave="reMouseLeave">
          </div>
        </div>
      </template>
    </div>
    
  </div>
</template>

<script>
  export default {
    name:'Custom',
    data(){
      return{
        columnList:[
          {
            id:1,
            name:'自定义一'
          },
          {
            id:2,
            name:'自定义二'
          },
          {
            id:3,
            name:'自定义三'
          },
          {
            id:4,
            name:'自定义四'
          },
          {
            id:5,
            name:'自定义五'
          },
          {
            id:6,
            name:'查看更多'
          },
        ],
        Src:'/image/button01_s.png',
        src:'/image/button01.png',
        // 是否选中
        isActive: 0,
        // 是否显示编辑
        EditActive:0,
        // 是否移入编辑
        editState:0,
        // 是否移入删除
        delState:0,
        // 是否移入重命名
        reState:0,
      }
    },
    methods: {
      selectMode(id){
        this.isActive = id ;
      },
      enter(id){
        this.EditActive = id ;
      },
      leave(){
        this.EditActive = 0 ;
      },
      // 鼠标移入（编辑）
      editMouseEnter(){
        this.editState = 1;
      },
      //鼠标移出（编辑）
      editMouseLeave(){
        this.editState = 0;
      },
      // 鼠标移入（删除）
      delMouseEnter(){
        this.delState = 1;
      },
      //鼠标移出（删除）
      delMouseLeave(){
        this.delState = 0;
      },
      // 鼠标移入（重命名）
      reMouseEnter(){
        this.reState = 1;
      },
      //鼠标移出（重命名）
      reMouseLeave(){
        this.reState = 0;
      },
    }
  }
</script>

<style>
  #custom{
    width: calc(100% - 27px);
    height: calc(100% - 355px);;
    background-image: url(/image/custom.png);
    background-size: 100% 100%;
    margin:0px 11px 16px 16px;
    position: relative;
  }
  .custom-list{
    width: calc(100% - 46px);
    position:absolute;
    left: 8%;
    top: 13%;
    display: flex;
    justify-content: space-around;
    flex-wrap:wrap;
  }
  #custom-item{
    width: 81px;
    height: 80px;
    margin-bottom:24px;
    position: relative;
  }
  #custom-item:hover{
    cursor: pointer;
  }
  .name{
    color:#fff;
    font-size:14px;
    font-family:SimHei;
    position: absolute;
    left: 50%;
    top: 34%;
    margin-left: -32px;
  }
  .edit{
    width: 22px;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position:absolute;
    top: 0;
    right: -17%;
  }
  .edit img{
    width: 14px;
    height: 14px;
  }
</style>