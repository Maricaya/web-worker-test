const {
    join,
    resolve
} = require("path");
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: "development",
    entry: {
        app: join(__dirname, "../src/server/index")
    },
    module: {
        rules: [{
            test: /\.(js|jsx|ts|tsx)$/,
            include: [resolve("src")],
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    },
    externals: [...Object.keys(require("../package.json").dependencies), nodeExternals()],
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
    }
}