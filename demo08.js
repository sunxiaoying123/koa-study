const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()


let home = new Router()
let page = new Router()

home.get('/xiaoying', async (ctx) => {
  ctx.body = 'home 下 小英 page'
}).get('/todo', async(ctx) => {
  ctx.body = 'home 下 todo page'
})

page.get('/xiaoying',(ctx, next) => {
  ctx.body = 'page xiaoying'
})
.get('/todo', (ctx, next) => {
  ctx.body = 'page todo page'
})
// 父级路由
let router = new Router()
router.use('/home',home.routes(), home.allowedMethods())
router.use('/page',page.routes(), page.allowedMethods())


app
  .use(router.routes())
  .use(router.allowedMethods())
app.listen(3000, () => {
  console.log('[demo] server is starting at port 3000')
})