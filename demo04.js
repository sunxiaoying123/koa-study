const Koa = require('koa')
const app = new Koa()
const bodyparser = require('koa-bodyparser')
app.use(bodyparser())
app.use(async (ctx) => {
  if (ctx.url === '/' && ctx.method === 'GET') {
    // 显示表单页面
    let html = `
      <h1>xiaoyig Koa2 request Post</h1>
      <form method="POST" action="/">
        <p>userName</p>
        <input name="userName"/><br/>
        <p>age</p>
        <input name="age"/><br/>
        <button type="submit">submit</button>
      </form>
    `
    ctx.body = html
  }else if(ctx.url === '/' && ctx.method === 'POST'){
    let postdata = ctx.request.body
    ctx.body = postdata
  }else {
    ctx.body = '<h1>404</h1>  ' 
  }
})

app.listen(3000, () => {
  console.log('post is listen at 3000')
})