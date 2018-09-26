const config = require('./webpack.pro.config.js')
const webpack = require('webpack')

console.log('生产环境');
webpack(config, function () {
  console.log('生产环境构建成功');
});