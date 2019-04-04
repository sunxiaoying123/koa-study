const Koa = require('koa')
const app = new Koa()
app.use(async (ctx) => {
  // 
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
    let postdata = await parsePostData(ctx)
    ctx.body = postdata
  }else {
    ctx.body = '<h1>404</h1>  ' 
  }
})

function parsePostData(ctx){
  return new Promise((resolve,reject) => {
    try{
      let postData = ''
      // 原生的方法接受data
      ctx.req.addListener('data', (data) => {
        postData += data
      })
      ctx.req.on('end', () => {
        let parseData = parseQueryString(postData)
        resolve(parseData)
      })
    }catch(err){
      reject(err)
    }
  })
}

function parseQueryString(queryStr) {
  let queryObj = {}
  let queryStringList = queryStr.split('&')
  console.log(1,queryStringList)
  console.log(2,queryStringList.entries().next().value)
  for(let [index,items] of queryStringList.entries()) {
    let itemList = items.split('=')
    console.log(index,items, itemList)
    queryObj[itemList[0]] = decodeURIComponent(itemList[1])
  }
  return queryObj
}
 


app.listen(3000, () => {
  console.log('post is listen at 3000')
})