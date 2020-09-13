const {
  join,
  resolve
} = require('path');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
  devServer: {
    // proxy: { // proxy URLs to backend development server
    //   '/api': 'http://localhost:3000'
    // },
    contentBase: join(__dirname, '..', 'dist'), // boolean | string | array, static file location
    compress: true, // enable gzip compression
    // historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    // https: false, // true for self-signed, object for cert authority
    // noInfo: true, // only errors & warns on hot reload
    port: 9000,
    historyApiFallback: true,
    open: true,
    // before(app, server, compiler) {
    //   // do fancy stuff
    //   app.get('/api/question/type', (req, res) => {
    //     res.json({
    // data: [{
    //     label: 'html',
    //     value: 'html'
    //   },
    //   {
    //     label: 'js',
    //     value: 'js'
    //   },
    //   {
    //     label: 'css',
    //     value: 'css'
    //   },
    //   {
    //     label: 'vue',
    //     value: 'vue'
    //   },
    //   {
    //     label: 'react',
    //     value: 'react'
    //   },
    //   {
    //     label: 'node',
    //     value: 'node'
    //   },
    //   {
    //     label: '工程化',
    //     value: 'webpack'
    //   },
    //   {
    //     label: '网络安全',
    //     value: 'internet'
    //   },
    //   {
    //     label: '算法',
    //     value: 'suanfa'
    //   },
    //   {
    //     label: '编程',
    //     value: 'coding'
    //   },
    //   {
    //     label: '其他',
    //     value: 'other'
    //   },
    // ],
    //       status: 200,
    //       msg: '成功'
    //     })
    //   })

    //   app.get('/api/question/typeTab', (req, res) => {
    //     res.json({
    //       type: 'vue',
    //       data: [{
    //         title: 'vue是什么',
    //         id: '001'
    //       }, {
    //         title: 'vue是什么',
    //         id: '001'
    //       }, {
    //         title: 'vue是什么',
    //         id: '001'
    //       }, {
    //         title: 'vue是什么',
    //         id: '001'
    //       }, {
    //         title: 'vue是什么',
    //         id: '001'
    //       }, {
    //         title: 'vue是什么',
    //         id: '001'
    //       }, {
    //         title: 'vue是什么',
    //         id: '001'
    //       }, {
    //         title: 'vue是什么',
    //         id: '001'
    //       }, ]
    //     })
    //   })
    // }
    // ...
  },
  output: {
    path: join(__dirname, '..', './dist/assets'),
    publicPath: '/assets/',
    // assetModuleFilename: 'images/[name].[hash:5][ext]',
    assetModuleFilename: 'images/[name].[ext]',
  },
  plugins: [
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: join(__dirname, '../', 'src/web/views/layouts/layout.html'),
    //       to: '../views/layouts/layout.html',
    //     },
    //   ],
    // }),
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: 'src/web/components/**/*.html',
    //       to: '../components',
    //       transformPath(targetPath, absolutePath) {
    //         return targetPath.replace('src/web/components/', '');
    //       },
    //     },
    //   ],
    // }),
  ],
};