const router = require('koa-router')()
const Jwt = require('../util/jwt')

const apiModule = require('../common/mysql')
const articleModule = apiModule.article


//jwt登录路由
router.post('/login', async (ctx, next)=>{
    await articleModule.getList().then(res=>{
        
        ctx.body = ctx.request
    })
})


router.post('/addArticle',async (ctx, next)=>{
    await articleModule.add().then(res=>{
        // console.log(res)
        ctx.body = res
    })

})

router.post('/getArticleList',async (ctx, next)=>{
    await articleModule.getList().then(res=>{
        console.log(res)
        ctx.body = res
    })

})


module.exports = router