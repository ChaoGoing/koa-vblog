import axios from 'axios'

const instance = axios.create({
  baseURL: '/api',
  headers: {
    
  }
})



function authGetter() {
  return  ''
}

instance.defaults.headers.post['Content-Type'] = 'application/x-www-frorm-urlencoded'

instance.interceptors.request.use(
  config => {
    let token;
    if (token = localStorage.getItem('vToken')) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers.Authorization = `${token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
)

instance.interceptors.response.use(
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
)

export default instance