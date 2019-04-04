const Koa = require('koa')
const path = require('path')
const views = require('koa-views')

const app = new Koa()

// 加载模板引擎
app.use(views(path.join(__dirname, './view'),{
  extension: 'ejs'
}))



app.use(async(ctx) => {
  let title = {
    key: 'hello xiaoying'
  }
  await ctx.render('index', {title})
})
app.listen(3000, () => {
  console.log('listen 3000')
})