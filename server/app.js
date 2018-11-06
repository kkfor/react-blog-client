const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const router = require('./router')

const app = new Koa()
app.use(router.routes())
  .use(router.allowedMethods())
app.use(require('koa-static')(__dirname + '../build'))
app.listen(3006, () => {
  console.log('listen on:3006')
})