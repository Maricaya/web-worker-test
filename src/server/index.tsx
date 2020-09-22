import Koa from 'koa';
import serve from 'koa-static';
import Router from '@koa/router';
import { matchPath } from 'react-router-dom';
import { routeLists } from '../web/routes';
import { RootStoreType, createStore } from '@models/root.store';
// const assert = require("assert");
import co from 'co';
import LRU from 'lru-cache';
// const serverEntry = require("../../dist/server-entry").default;
import React from 'react';
import ReactDomServer, { renderToString } from 'react-dom/server';
import axios from 'axios';
import showdown from 'showdown';
import nodeHtmlToImage from 'node-html-to-image';

const app = new Koa();
// const options = {
//   max: 500,
//   length: function (n: number, key: string | any[]) {
//     return n * 2 + key.length;
//   },
//   dispose: function (key: any, n: { close: () => void }) {
//     n.close();
//   },
//   maxAge: 1000 * 60 * 60,
// };
// const cache = new LRU(options);
app.use(serve(__dirname + '/assets'));

const router = new Router();

app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set(
    'Access-Control-Allow-Headers',
    'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild'
  );
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (ctx.method == 'OPTIONS') {
    ctx.body = 200;
  } else {
    await next();
  }
});

router.get('/api/images', async (ctx, next) => {
  let qid = Number(ctx.query.qid);
  let uid = Number(ctx.query.uid);
  let response = await axios.request({
    method: 'post',
    url: 'https://fc-api.yidengxuetang.com/exam/question/get',
    responseType: 'json',
    data: {
      qid,
      uid,
    },
  });
  // console.log(response.data);

  let converter = new showdown.Converter();
  let text = response.data.result.short_answer.analysis;
  let html = converter.makeHtml(text);
  html = `<html>
          <head>
            <style>
              body {
                padding:30px;
                width:750px;
                font-family: cursive;
              }
              .container {
                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAMAAAAL34HQAAABdFBMVEX+/f3+/f3//f372sj////////++vj60bn+8uz5yaz959z739H96d/61sL+/f3+/f7/////+/n//Pv++ff++PX///7zmWH96t/+8+36z7b0n2j4upT3tIr+9O7+8uv95tryk1b95935xqj5wJ74v5z1pXP+8Oj1qHf+8er838/1o3HyklP84tP83cvzllr6zbH0nWb+9fD71b75xaX4vZn2rH70mF785df72cT2roP1oGv//fz84dH5w6H2rYD0om371Lz4uZH2qnzxi0n/9vH71sD70rn6yq75w6T3t4/3tYz83s397eL2qXv+7+b6z7P6yaz6yKr4vJfykE/97uT718H1p3X2o27zlVjzm2Pzl1v87OT96uH828nyjkz99/L70bfxhUD+9e/3sIf2qnn949X3sITxiEb/9vP728bxiEP95Nf2roD3to33s4f0m2Xwgzv818PvfjL1pXHvey396dz6zK74vJTvdiX/+PXuchnraQB9jr+VAAAAD3RSTlPl/vT+9eb2+PX25vz36tdUi4HmAAATuElEQVR42syZiVciRxDGNWZf7vQ3B8N9yiEgiKKoIKCCoiCCgorKId6L5yYmb5P889luJgGiLsNhku89ntMD1f3b7urq6tqRH0c+q3fvRr794duRdyP/st6NflbijCEcPkwfq0b/TX0xMjJKXhfU4X3ttmbJE9gG+Rf1OSyBfjx2ANDo7nnSj4aPZZsBIchJ0ypCsFCwDjhdg2OBEnCeNYo1IWnpn+lAtEcsAKRf4csXsFRLYyBElCqgv1jZ5+g7Qwy9QRnNZQ79QUH8vhMLoAha/w4gHpkZ1pJ3EpRulfSg0Yw+IJWyk31xWcfjUjsWcK3h6d+10gYEycqwONcKCDjPrPIhIMZ0G1aT+cyy1AeXXdJPft2GBZPdtb8psCmSgjVPMyZAKzmBYGgLypC4CCEknQUALham+0WxwPGEYErStPsWTJ7smnuMZ8/q+Kpnook1LeUnDYGMQqq1nU/9YdJyA0JQ9s70Ml1mexJ0PC3ad+LmHAdA7v7YEdCg+Wgv7M9SxC5ipkjbKQ+3v8JasUWFWACdpyzPxjvgKFYTBc6SD22/U5fGID+dGBVsdlV5jQfB+QYIC3dOOlDqUFBEZZzRgCDK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); 
                background-size:400px 400px;
                opacity:.3;
                position:absolute;
                left:0;
                right:0;
                top:0;
                bottom:0;
              }
              pre {
                background: rgba(216,245,249,0.2);
              }
              li {
                list-style-type:none;
              }
            </style>
          </head>
          <body>
          <div class="container"></div>
          ${html}
          </body>
        </html>`;
  // console.log(html);
  let image = await nodeHtmlToImage({
    html,
  });
  ctx.set('Content-Type', 'image/png');
  ctx.body = image;
});

// router.get("/", async (ctx, next) => {
//   const promises = [];
//   const store = createStore()

//   routeLists.some((route) => {
//     const match = matchPath(ctx.request.path, route);
//     if (match && route.loadData) promises.push(route.loadData(store));
//     return match;
//   });
// });

app.use(router.routes()).use(router.allowedMethods());
app.listen(8082, () => {
  console.log('图书管理平台启动成功📚');
});
