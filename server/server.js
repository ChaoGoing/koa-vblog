const Koa = require('koa');
const app = new Koa();
const bodyparser = require('koa-bodyparser');
app.use(bodyparser());
const router = require('koa-router')();
const Router = require('./router/router')
const jwtUtil = require('./util/jwt')
const static = require('koa-static')   //静态资源服务插件
const path = require('path')


// const koaBody = require('koa-body');
// app.use(koaBody({
//     multipart: true,
//     formidable: {
//         maxFileSize: 200*1024*1024*8    // 设置上传文件大小最大限制，默认16M
//     }
// }));

const staticPath = './static'
app.use(static(
    path.join( __dirname, staticPath)
))

app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080');
    ctx.set('Access-Control-Allow-Methods', 'PUT,DELETE,POST,GET');
    ctx.set('Access-Control-Max-Age', 3600);
    await next();
});

app.use(async (ctx, next) => {
    const reg = /^\/j[\s\S]+/,
          url = ctx.req.url;
    //登录页不需要作token验证，第一次登录时此时的token可能为null
    if(url =='/jLogin') return await next()
    //如果是后台管理接口
    if(reg.test(url)){
        const token = ctx.request.header.authorization;
        if(token){
            const result = jwtUtil.verifyToken(token)
            console.log("token验证结果",result)
            if(!result) ctx.status = 401
        }else{
            ctx.status = 401
        }
    }
    await next();
})



app.use(Router.routes());
app.use(router.allowedMethods())





app.listen(1029);
console.log('koa damo is starting at port 1029');


function parseData(ctx) {
    return new Promise((resolve, reject) => {
        try {
            let str = ''
            ctx.req.addListener('data', data => {
                str += data
            })

            ctx.req.addListener('end', () => {
                resolve( parseUrl(str) )
            })

        } catch (e) { reject(e) }

    })

}

function parseUrl(url) {
    let obj = {}
    let arr = url.split("&");
    arr.forEach((e, i) => {
        let tem = arr.split("=")
        obj[tem[0]] = tem[1]
    })
    return obj;
    console.log(JSON.stringify(obj))
}