const Koa = require("koa");
const serve = require("koa-static");
const render = require("koa-swig");
const router = require("koa-simple-router");
// const assert = require("assert");
const co = require("co");
// const serverEntry = require("../../dist/server-entry").default;
const ReactDomServer = require("react-dom/server");
const LRU = require("lru-cache");
const axios = require("axios");
const showdown = require("showdown");
const nodeHtmlToImage = require('node-html-to-image')
const fs = require('fs');

const app = new Koa();
const options = {
  max: 500,
  length: function (n: number, key: string | any[]) {
    return n * 2 + key.length;
  },
  dispose: function (key: any, n: { close: () => void }) {
    n.close();
  },
  maxAge: 1000 * 60 * 60,
},
  cache = new LRU(options);
app.use(serve(__dirname + "/"));
app.context.render = co.wrap(
  render({
    root: __dirname + "/views",
    autoescape: true,
    cache: false,
    ext: "html",
    writeBody: false,
  })
);
const ssrDictionaries = {
  "/": {
    title: "🏃项目首页",
  },
  demos: {
    title: "🤮 测试页面",
  },
};
app.use(
  router(async (_: any) => {
    _.get("/", async (ctx: any, next: any) => {
      let response = await axios({
        method: "post",
        url: "https://fc-api.yidengxuetang.com/exam/question/get",
        responseType: "json",
        responseEncoding: "utf8",
        data: {
          qid: 870,
          uid: 0,
        },
      })
      console.log(response.data);
      
      // const img = fs.readFileSync('logo_01c8731.png');
      // const buffer = new Buffer(img, 'binary');
      // const base64Image = buffer.toString('base64')
      // const dataURI = 'data:image/jpeg;base64,' + base64Image

      let converter = new showdown.Converter();
      let text = response.data.result.short_answer.analysis;
      let html = converter.makeHtml(text);
      html = `<html>
            <head>
              <style>
                body {
                  background:#24272a;
                  background-image: url(data:image/png;base64,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);
                  color:white;
                }
              </style>
            </head>
            <body>
            ${html}
            </body>
          </html>`;
          // <img class="img" src="{{imageSource}}" />
      console.log(html);
      let image = await nodeHtmlToImage({
        html,
      })
      console.log(image)
      ctx.set('Content-Type', 'image/png' );
      ctx.body = image;
    });
  })
);
app.listen(8082, () => {
  console.log("图书管理平台启动成功📚");
});
