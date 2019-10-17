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


axios.defaults.baseURL = '/api'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-frorm-urlencoded'
Vue.prototype.$axios = axios;

axios.interceptors.request.use(
  config => {
      let token;
      if (token = localStorage.getItem('vToken')) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
          config.headers.Authorization = `${token}`;
      }
      return config;
  },
  err => {
      return Promise.reject(err);
  });

  axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 返回 401 清除token信息并跳转到登录页面
                    localStorage.removeItem('vToken')
                    router.replace({
                        path: '/login',
                        
                    })
            }
        }
    return Promise.reject(error.response.data)   // 返回接口返回的错误信息
  }
);


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
