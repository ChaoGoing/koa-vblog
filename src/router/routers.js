
import home from '../components/front-end/home'
import fIndex from '../components/front-end/index/index'
import articles from '../components/front-end/articles/articles'
import articleInfo from '../components/front-end/articles/articleInfo'
import fav from '../components/front-end/fav/fav'
import about from '../components/front-end/about/about'






import afterLogin from '../components/after-end/login/login'
import manage from '../components/after-end/main'
import afterIndex from '../components/after-end/manage/index'
import manageArticles from '../components/after-end/manage/manageArticles'
import manageLabels from '../components/after-end/manage/manageLabels'
import editArticle from '@/components/after-end/manage/editorArticle'


const routers =  [
    //前台路由
    {
        path: "/",
        name: "home",
        component:home,
        children:[
            // {
            //     path:'/',
            //     name:'frontIndex',
            //     component:fIndex
            // },
            {
                path:'/fIndex',
                name:'fIndex',
                component:fIndex,
            },
            {
                path:'/articles',
                name:'articles',
                component:articles,
            },
            {
                path:'/articleInfo',
                name:"articleInfo",
                component:articleInfo,
            },
            {
                path:'/fav',
                name:'fav',
                component:fav
            },
            {
                path:"/about",
                name:'about',
                component:about,
            }

        ]
    },







    //后台路由
    //后台登陆
    {
        path:'/login',
        name:'afterLogin',
        component:afterLogin
    },
    //后台主页面
    {
        path:'/manage',
        name:'manage',
        component:manage,
        meta: {
            auth: true
        },
        children:[
            {
                path:'/index',
                name:'index',
                component:afterIndex,
            },
            {
                path:'/manageArticles',
                name:'manageArticles',
                component:manageArticles,
                meta: {
                    auth: true
                },
            },
            {
                path:'/manageLabels',
                name:'manageLabels',
                component:manageLabels,
                meta: {
                    auth: true
                },
            },
            {
                path:'/editArticle',
                name:'editArticle',
                component:editArticle,
                meta: {
                    auth: true
                },
            },
            
        ]
    }

]


export default routers 