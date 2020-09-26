const {
  join,
  resolve
} = require('path');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
  devServer: {
    proxy: { // proxy URLs to backend development server
      '/api': 'http://localhost:3000'
    },
    contentBase: join(__dirname, '..', 'dist'), // boolean | string | array, static file location
    compress: true, // enable gzip compression
    // historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    // https: false, // true for self-signed, object for cert authority
    // noInfo: true, // only errors & warns on hot reload
    port: 9000,
    historyApiFallback: true,
    open: true,
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