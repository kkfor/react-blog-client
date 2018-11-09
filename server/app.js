const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const router = require('./router')
const path = require('path')
const staticFiles = require('koa-static')

const app = new Koa()
app.use(router.routes())
  .use(router.allowedMethods())
app.use(staticFiles(path.resolve(__dirname, '../build')))
app.listen(3006, () => {
  console.log('listen on:3006')
})