const Koa = require('koa')
const bodyparser = require('koa-bodyparser')

const app = new Koa()

app.use(requrie('koa-static')(__dirname + '../build'))
app.listen(3006, () => {
  console.log('listen on:3006')
})