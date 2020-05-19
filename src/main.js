import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'iview';
import axios from 'axios';
import store from './store/index'
import 'lib-flexible/flexible.js'
import 'iview/dist/styles/iview.css';
import './assets/styles/layout/layout.less' // 引入布局样式
import './assets/styles/cover/cover.less' // 覆盖样式
import './assets/styles/base/base.less'

import serverApi from './config/api'

Vue.use(iView)


Vue.config.productionTip = false

import customAxios from './api/customAxios';
Vue.prototype.cAxios = customAxios(serverApi);




router.beforeEach((to, from, next) => {
  if (to.meta.auth) { //权限判断
    if (localStorage.getItem('vToken')) { //读取token值
      next()
    } else {
      next({path:'/login'})
    }
  } else {
    // 没有meta.auth 不用管
    next()
  }
});

new Vue({
  router,
  store,
  render: h => h(App),
  
}).$mount('#app')
