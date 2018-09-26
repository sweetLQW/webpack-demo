const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:  {
    first: __dirname + "/app/js/first.js",
    second: __dirname + "/app/js/second.js"
  }, // 多入口
  output: {
    path: __dirname + "/public/js",//打包后的文件存放的地方
    filename: "[name].[hash].bundle.js"//打包后输出文件的文件名
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "first",
      filename: "../first.html", // 生成文件名称
      template: 'index.ejs', // 模板位置
      chunks: ['first'] // 定义哪些js要引入
    }),
    new HtmlWebpackPlugin({
      title: "second",
      filename: "../second.html",
      template: 'index.ejs',
      chunks: ['second']
    })
  ]
}