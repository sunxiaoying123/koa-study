const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()


app.use(async (ctx) => {
  if(ctx.url === '/index') {
    ctx.cookies.set(
      'testCokkie','hahha', {
        domain: '127.0.0.1', // 写kookie所在的域名
        // path: '/index',
        maxAge: 1000*60*60*24,
        expires:new Date('2018-03-24'),
        httpOnly: false,
        overwrite: false // 是否允许重写
      }
    )
    ctx.body =  'cookie is ok'
  } else {
    if(ctx.cookies.get('testCokkie')) {
      ctx.body = 'cookieName = ' + ctx.cookies.get('testCokkie')
    }else {
      ctx.body = 'hello world'
    }
    
  }
})
app.listen(3000, () => {
  console.log('listen 3000')
})