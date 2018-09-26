const config = require('./webpack.dev.config.js')
const webpack = require('webpack')

console.log('开发环境');
webpack(config, function () {
  console.log('开发环境构建成功');
});