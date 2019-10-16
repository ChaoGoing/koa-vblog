
import home from '../components/front-end/home'
import afterLogin from '../components/after-end/login/login'
import manage from '../components/after-end/main'
import afterIndex from '../components/after-end/manage/index'
import manageArticles from '../components/after-end/manage/manageArticles'
import manageLabels from '../components/after-end/manage/manageLabels'
import editorArticle from '@/components/after-end/manage/editorArticle'


const routers =  [
    //前台路由
    {
        path: "/",
        name: "home",
        component:home
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
        children:[
            
            {
                path:'/index',
                name:'index',
                component:afterIndex,
            },
            {
                path:'/manageArticles',
                name:'manageArticles',
                component:manageArticles
            },
            {
                path:'/manageLabels',
                name:'manageLabels',
                component:manageLabels,
            },
            {
                path:'/editorArticle',
                name:'editorArticle',
                component:editorArticle
            },
            
        ]
    }

]

export default routers 