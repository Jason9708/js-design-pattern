const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: './ouput/bundle.js'
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html' // 模板
        })
    ],
    // 可以把打包出来的Js注入到模板中
    devServer: {
        contentBase: path.join(__dirname, './output'), // 根目录下的output
        open: true, // 自动打开浏览器
        port: 9000,
    }
}