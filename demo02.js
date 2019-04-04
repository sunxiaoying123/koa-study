const Koa = require('koa')
const app = new Koa()
app.use(async(ctx) => {
  let url = ctx.url
  // 使用reques中接受get请求
  let request = ctx.request
  let req_query = request.query
  let req_queryStrirng = request.querystring
  // 直接从上下文中获取get 请求
  let ctx_query = ctx.query
  let ctx_queryString = ctx.querystring

  ctx.body = {
    url,
    req_query,
    req_queryStrirng,
    ctx_query,
    ctx_queryString
  }
})

app.listen(3000, () => {
  console.log('demo is listennig at 3000')
})