import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { layout } from './layout'
import App from '../../src/App'
import router from '../router'
import { matchRoutes, renderRoutes } from 'react-router-config'
import { matchPath } from 'react-router-dom'

const getMatch=(routesArray, url)=>{
  return routesArray.some(router=>matchPath(url,{
    path: router.path,
    exact: router.exact,
  }))
}

module.exports.render = async(ctx, next) => {
  // const branch = matchRoutes(router, ctx.req.url)
  let isMatch=getMatch(router,ctx.req.url);
  if(!isMatch){
    await next();
 }else{
  const html = ReactDOMServer.renderToString(
    <StaticRouter
    location={ctx.url}>
      <App />
    </StaticRouter>
  )
  const body = layout(html)
  ctx.body = body
 }
}