export default [
    //前台路由
    {
        path: "/",
        name: "home",
        component: resolve => {
            require(['@/components/front-end/home'], resolve)
        },
        children: [{
                path: '/',
                name: 'frontIndex',
                component: resolve => {
                    require(['@/components/front-end/index/index'], resolve)
                }
            },
            {
                path: '/fIndex',
                name: 'fIndex',
                component: resolve => {
                    require(['@/components/front-end/index/index'], resolve)
                }
            },
            {
                path: '/articles',
                name: 'articles',
                component: resolve => {
                    require(['@/components/front-end/articles/articles'], resolve)
                }
            },
            {
                path: '/articleInfo',
                name: "articleInfo",
                component: resolve => {
                    require(['@/components/front-end/articles/articleInfo'], resolve)
                }
            },
            {
                path: '/fav',
                name: 'fav',
                component: resolve => {
                    require(['@/components/front-end/fav/fav'], resolve)
                }
            },
            {
                path: "/about",
                name: 'about',
                component: resolve => {
                    require(['@/components/front-end/about/about'], resolve)
                }
            }

        ]
    },
]