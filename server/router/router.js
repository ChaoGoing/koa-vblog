const bodyparser = require('koa-bodyparser');
const router = require('koa-router')();
const jwt = require('../util/jwt');
const koaBody = require('koa-body');

const apiModule = require('../common/mysql')
const articleModule = apiModule.article,
      commonModule = apiModule.common;


//前台api
router.post('/getArticles',async (ctx)=>{
    await articleModule.getList().then(res=>{
        // console.log(res)
        ctx.body = { code:1, data:res }
    })

})
router.post('/getArticleContent',async (ctx)=>{
    let id = ctx.request.body.articleId;
    await articleModule.getArticleInfo(id).then(res => {
        console.log(res)
        if(res){
            ctx.body = {
                code:1,
                data:res[0]
            }
        }else{
            ctx.body = {
                code:0,
                data:{}
            }
        }
    })

})












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

router.post('/jAddArticle',async (ctx)=>{
    await articleModule.add().then(res=>{
        // console.log(res)
        ctx.body = res
    })

})

router.post('/jGetArticleList',async (ctx, next)=>{
    await articleModule.getList().then(res=>{
        console.log(res)
        ctx.body = { code:1, data:res }
    })
})

// router.post('/uploadImg',async (ctx, next)=>{
//     console.log(ctx.request.body.files )
//     ctx.body = {data:ctx.request.files}
// })
router.post('/jGetArticleInfo',async (ctx, next)=>{
    let id = ctx.request.body.articleId, result;
    console.log(id)
    await articleModule.getArticleInfo(id).then(res => {
        console.log(res)
        if(res){
            ctx.body = {
                code:1,
                data:res[0]
            }
        }else{
            ctx.body = {
                code:0,
                data:{}
            }
        }
    })


})

router.post('/jUpdateArticle', async(ctx, next)=>{
    
    let params = ctx.request.body;
    // console.log(params)
    await articleModule.update(params).then(res=>{
        if(res.affectedRows){
            ctx.body = {code:1, data:"ok"}
        }else{
            ctx.body = {code:0, data:"error"}
        }
        
    })
})

function dealRowDataPacket(data){
    return JSON.parse(JSON.stringify(data));
}





module.exports = router