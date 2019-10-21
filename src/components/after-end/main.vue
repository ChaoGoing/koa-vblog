<template>
  <div class="app-wrapper" :class="{hideSidebar:hideSidebar, hoverSidebar:hoverSidebar}">
    <!-- 左侧 -->
    <div class="side-wrapper" >
      <!-- logo -->
      <!-- <div style="height:50px;" class="logo-box">logo-box</div> -->
      <!-- logo /-->
      <!-- 左侧导航 -->
      <nav-bar style="padding-bottom: 80px">
        <Menu
          width="300"
          :theme="theme"
          :accordion="true"
          @on-select="selectFn"
          :active-name="$route.path"
        >
          <div v-for="(item,index) in menu " :key="index">
            <Submenu :name="index" v-if="item.children && item.children.length>0 && !item.hidden">
              <template slot="title">
                <i class="ivu-icon" :class="item.icon ? item.icon :'icon-collection'"></i>
                {{item.name}}
              </template>
              <Menu-item
                :name="sub.path"
                v-for="(sub,i) in item.children"
                :key="i"
                v-if="!sub.hidden"
              >
                <!-- <Icon type="item.icon" /> -->
                <i class="ivu-icon" :class="sub.icon ? sub.icon : 'icon-collection'"></i>
                {{sub.name}}
              </Menu-item>
            </Submenu>
            <div>
              <Menu-item
                :name="item.path"
                :key="index"
                v-if="item.children.length==0 && !item.hidden && item.level!=0 "
              >
                <i class="ivu-icon" :class="item.icon ? item.icon :'icon-collection'"></i>
                {{item.name}}
              </Menu-item>
            </div>
          </div>
        </Menu>
      </nav-bar>
      <div class="theme-switch">
        切换模式
        <i-switch size="large">
          <span slot="open">Dark</span>
          <span slot="close">Light</span>
        </i-switch>
      </div>
      <!-- 左侧导航 /-->
    </div>
    <!-- 左侧 /-->
    <!-- 主体 -->
    <div class="main-wrapper">
      <!-- 头部 -->
      <tHeader v-on:toggleClass="toggleSideBar">
        
        <!-- 用户信息 -->
        <Dropdown class="userBox" slot="right">
          
          <a href="javascript:void(0)">
            <Icon type="md-arrow-dropdown" />
            管理员
            
          </a>
          <Dropdown-menu slot="list">
            <Dropdown-item @click.native="toPersonPage">个人信息</Dropdown-item>
            <Dropdown-item @click.native="logout">退出登录</Dropdown-item>
            <Dropdown-item>锁定屏幕</Dropdown-item>
          </Dropdown-menu>
        </Dropdown>
        <!-- 用户信息 /-->
      </tHeader>
      <!-- 头部 /-->
      <!-- 内容部分 -->
      <div class="main-container">
        
        <container class="container">
          <!-- 面包屑 -->
          <Breadcrumb class="breadCrumb">
            <Breadcrumb-item href="/">
              <Icon type="ios-home-outline"></Icon>Home
            </Breadcrumb-item>
            <Breadcrumb-item>
              <Icon type="pound"></Icon>
              {{currentPath | filterPath}}
            </Breadcrumb-item>
          </Breadcrumb>
          <!-- 面包屑 /-->
          <!-- 路由 -->
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
          <!-- 路由/ -->
        </container>
      </div>
      <!-- 内容部分 /-->
    </div>
    <!-- 主体 /-->
  </div>
</template>
<script>
import tHeader from "./layout/THeader";
import container from './layout/Container'
import navBar from './layout/NavBar'
import {mapGetters, mapMutations, mapActions} from 'vuex'
import menu from '../../config/menu'
export default {
  components: {
    tHeader,container,navBar
  },
  data() {
    return {
      theme: 'dark', // 主题
      menu: menu,

      hideSidebar:false,
      hoverSidebar:false,
    };
  },
  methods:{
    ...mapMutations({
      setCurrentPath:'SET_CURRENT_PATH'
    }),
    selectFn (a) {
      console.log(a, this.$route.path)
      this.setCurrentPath(a)
      this.$router.push({
        path: a
      })
    },
    logout(){
      localStorage.removeItem('vToken');
      this.$router.push({path:'/login'})
    },
    toggleSideBar(){
      this.hideSidebar = !this.hideSidebar;
      this.hoverSidebar = !this.hoverSidebar;
      console.log(this.hideSidebar)
    }
  },
  computed:{
    ...mapGetters([
      "currentPath"  //这里记得加引号
    ]),
    

  },
  filters:{
    filterPath(item){
      return item.slice(1)
    }
  }

};
</script>

<style lang="less">
  .hideSidebar{
    .side-wrapper{
      transform: translate(-150px, 0);
      
    }
  
    .navbar{
      // opacity: 0;
      transform:translate(150px, 0)
    }

    .main-wrapper{
      padding-left: 40px !important;
    }

  }
</style>
