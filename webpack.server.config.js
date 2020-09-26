const {
    join,
    resolve
} = require("path");
const nodeExternals = require('webpack-node-externals');
const argv = require('yargs-parser')(process.argv.slice(2));
const _mode = argv.mode || 'development';
const _modeFlag = _mode === 'production' ? true : false;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    entry: {
        app: join(__dirname, "src/server/index")
    },
    module: {
        rules: [{
            test: /\.(js|jsx|ts|tsx)$/,
            include: [resolve("src")],
            exclude: /node_modules/,
            loader: "babel-loader"
        },
        {
            test: /\.css$/i,
            use: [
                 MiniCssExtractPlugin.loader ,
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1
                    }
                },
                'postcss-loader',
            ],
        },
        {
            test: /\.(png|jpg|jpeg|gif|eot|woff|woff2|ttf|svg|otf)$/,
            type: 'asset',
        },
        ]
    },
    externals: [nodeExternals()],
    // externals: [...Object.keys(require("../package.json").dependencies), nodeExternals()],
    resolve: {
        alias: {
            "@assets": resolve("src/web/assets"),
            "@components": resolve("src/web/components"),
            "@models": resolve("src/web/models"),
            "@pages": resolve("src/web/pages"),
            "@utils": resolve("src/web/utils")
        },
        modules: ["node_modules", resolve("src")],
        extensions: [".js", ".ts", ".tsx", "jsx"]
    },
    target: "node",
    output: {
        filename: "app.js",
        libraryTarget: "commonjs2"
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: _modeFlag ?
                'styles/[name].[contenthash:5].css' : 'styles/[name].css',
            chunkFilename: _modeFlag ?
                'styles/[name].[contenthash:5].css' : 'styles/[name].css',
        }),
    ]
}