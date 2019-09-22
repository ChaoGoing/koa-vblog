const Koa = require('koa');
const app = new Koa();
const bodyParser = require("koa-bodyparser");




app.use(async (ctx) => {
    ctx.body = 'hello koa2'
});

app.listen(1029);
console.log('koa damo is starting at port 1029');
