const {resolve} = require('path');
module.exports = {
    entry: "./lib/assets/script/Framework/index.js",
    output: {
        filename: "framework.js",
        path: resolve(__dirname, 'build')
    },
    plugins: [],
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    },
    //打包模式
    mode: "development",//開發模式
    // mode: "production",//生產模式,會打包壓縮,會比較難以閱讀
};