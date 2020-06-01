
export default [
  //后台路由
    //后台登陆
    {
      path:'/login',
      name:'afterLogin',
      component: resolve => {
        require(['@/components/after-end/login/login'], resolve)
      }
      
  },
  //后台主页面
  {
      path:'/manage',
      name:'manage',
      component: import('../../components/after-end/main'),
      meta: {
          auth: true
      },
      children:[
          {
              path:'/index',
              name:'index',
              component: resolve => {
                require(['@/components/after-end/manage/index'], resolve)
              }
          },
          {
              path:'/manageArticles',
              name:'manageArticles',
              meta: {
                  auth: true
              },
              component: resolve => {
                require(['@/components/after-end/manage/article/manageArticles'], resolve)
              }
          },
          {
              path:'/manageLabels',
              name:'manageLabels',
              meta: {
                  auth: true
              },
              component: resolve => {
                require(['@/components/after-end/manage/label/manageLabels'], resolve)
              }
          },
          {
              path:'/editArticle',
              name:'editArticle',
              meta: {
                  auth: true
              },
              component: resolve => {
                require(['@/components/after-end/manage/article/editorArticle'], resolve)
              },
          },
          {
              path:'/addArticle',
              name:'addArticle',
              meta: {
                  auth: true
              },
              component: resolve => {
                require(['@/components/after-end/manage/article/addArticle'], resolve)
              },
          },
          {
              path:'/addIndexImg',
              name:'addIndexImg',
              meta: {
                  auth: true
              },
              component: resolve => {
                require(['@/components/after-end/manage/index/addIndexImg'], resolve)
              },
          },
          {
              path:'/editIndexImg',
              name:'editIndexImg',
              meta: {
                  auth: true
              },
              component: resolve => {
                require(['@/components/after-end/manage/index/editIndexImg'], resolve)
              },
          },
          {
              path:'/manageIndexImg',
              name:'manageIndexImg',
              meta: {
                  auth: true
              },
              component: resolve => {
                require(['@/components/after-end/manage/index/manageIndexImg'], resolve)
              },
          },
          
      ]
  }
]