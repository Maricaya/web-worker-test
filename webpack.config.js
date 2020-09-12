const argv = require('yargs-parser')(process.argv.slice(2));
const _mode = argv.mode || 'development';
const _modeFlag = _mode === 'production' ? true : false;
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
const { merge } = require('webpack-merge');
const { sync } = require('glob');
const { resolve, join } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
// const files = sync('./src/web/views/**/*.entry.js');


let _entry = {
    index: './src/web/index.tsx'
};
let _plugins = [
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
        title: '京程一灯yd-react-generator',
        filename: '../index.html',
        template: join(__dirname, `./src/web/index-${_modeFlag ? 'prod' : 'dev'}.html`),
    }),
    new MiniCssExtractPlugin({
        filename: _modeFlag
            ? 'styles/[name].[contenthash:5].css'
            : 'styles/[name].css',
        chunkFilename: _modeFlag
            ? 'styles/[name].[contenthash:5].css'
            : 'styles/[name].css',
    }),
];

// for (let item of files) {
//   // console.log(item)
//   if (/.+\/([a-zA-Z]+-[a-zA-Z]+)(\.entry\.js)/g.test(item) == true) {
//     console.log(RegExp.$1);
//     const entryKey = RegExp.$1;
//     _entry[entryKey] = item;
//     const [dist, template] = entryKey.split('-');
//     _plugins.push(
//       new HtmlWebpackPlugin({
//         filename: `../views/${dist}/pages/${template}.html`,
//         template: `src/web/views/${dist}/pages/${template}.html`,
//         chunks: ['runtime', entryKey],
//         inject: false,
//       })
//     );
//   } else {
//     console.log('🐖', '项目配置匹配失败');
//     process.exit(-1);
//   }
// }

const webpackConfig = {
    entry: _entry,
    // plugins: [..._plugins, new HtmlAfterPlugin()],
    plugins: [..._plugins],
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                include: [resolve('src')],
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [
                    _modeFlag ? MiniCssExtractPlugin.loader : 'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'postcss-loader',
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif|eot|woff|woff2|ttf|svg|otf)$/,
                type: 'asset',
            },
        ]
    },
    //暂时支持性好不是很良好 HardSourceWebpackPlugin也报错😿
    // cache: {
    //   type: 'filesystem',
    //   // cacheDirectory 默认路径是 node_modules/.cache/webpack
    //   cacheDirectory: resolve(__dirname, '.temp'),
    // },
    resolve: {
        alias: {
            '@assets': resolve('src/web/assets'),
            '@components': resolve('src/web/components'),
            '@models': resolve('src/web/models'),
            '@routes': resolve('src/web/routes'),
            '@pages': resolve('src/web/pages'),
            '@utils': resolve('src/web/utils'),
            '@tools': resolve('src/web/tools'),
        },
        extensions: [".js", ".json", ".jsx", ".css", ".ts", ".tsx"],
        modules: ['node_modules', resolve('src')],
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'react-router-dom': 'ReactRouterDOM',
    },
    experiments: {
        topLevelAwait: true,
        asset: true,
    },
    optimization: {
        runtimeChunk: {
            name: 'runtime',
        },
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: false,
            cacheGroups: {
                commons: {
                    chunks: 'initial',
                    minChunks: 2,
                    maxInitialRequests: 5,
                    minSize: 0,
                    name: 'commons',
                },
            },
        },
    },

};
module.exports = merge(webpackConfig, _mergeConfig);