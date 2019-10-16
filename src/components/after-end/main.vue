<template>
  <div class="app-wrapper">
    <!-- 左侧 -->
    <div class="side-wrapper">
      <!-- logo -->
      <!-- <div style="height:50px;" class="logo-box">logo-box</div> -->
      <!-- logo /-->
      <!-- 左侧导航 -->
      <nav-bar style="padding-bottom: 80px">
        <Menu
          width="220"
          :theme="theme"
          :accordion="true"
          @on-select="selectFn"
          :active-name="$route.path"
        >
          <div v-for="(item,index) in menu " :key="index">
            <Submenu :name="index" v-if="item.children && item.children.length>0 && !item.hidden">
              <template slot="title">
                <i class="icon iconfont" :class="item.icon ? item.icon :'icon-collection'"></i>
                {{item.name}}
              </template>
              <Menu-item
                :name="sub.path"
                v-for="(sub,i) in item.children"
                :key="i"
                v-if="!sub.hidden"
              >
                <i class="icon iconfont" :class="sub.icon ? sub.icon : 'icon-collection'"></i>
                {{sub.name}}
              </Menu-item>
            </Submenu>
            <div>
              <Menu-item
                :name="item.path"
                :key="index"
                v-if="item.children.length==0 && !item.hidden && item.level!=0 "
              >
                <i class="icon iconfont" :class="item.icon ? item.icon :'icon-collection'"></i>
                {{item.name}}
              </Menu-item>
            </div>
          </div>
        </Menu>
      </nav-bar>
      <div class="theme-switch">
        Switch Theme
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
      <tHeader>
        <!-- 用户信息 -->
        <Dropdown class="userBox" slot="right">
          <a href="javascript:void(0)">
            Artiely
            <Icon type="arrow-down-b"></Icon>
          </a>
          <Dropdown-menu slot="list">
            <Dropdown-item>个人信息</Dropdown-item>
            <Dropdown-item>退出登录</Dropdown-item>
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
<style lang="stylus"></style>