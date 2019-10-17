const bodyparser = require('koa-bodyparser');
const router = require('koa-router')()
const jwt = require('../util/jwt')

const apiModule = require('../common/mysql')
const articleModule = apiModule.article,
      commonModule = apiModule.common;


//jwt登录路由
router.post('/jLogin', async (ctx)=>{
    let {name, pwd} = ctx.request.body;
    const count = await commonModule.checkLogin(name, pwd);
    // console.log(!!count)
    let result = dealRowDataPacket(count)[0].count;
    // console.log("账号密码验证结果=>",result)
    if(!result){ 
        return  ctx.body = { code:"0", data:"账号用户名或密码错误" } 
    }
    let token = jwt.generatorToken(name);
    console.log(token)
    ctx.body = {
        code:"1",
        data:"ok",
        token,
    }
    
})

router.post('/addArticle',async (ctx)=>{
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


function dealRowDataPacket(data){
    return JSON.parse(JSON.stringify(data));
}

module.exports = router